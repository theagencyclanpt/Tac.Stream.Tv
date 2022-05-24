using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using System;
using System.Net;
using System.Net.Http;
using System.Net.NetworkInformation;
using System.Net.Sockets;
using System.Threading;
using System.Threading.Tasks;

namespace Kastr.Stream.Wizard.WebApp.Controllers
{
    [ApiController]
    [Route("api/machine-manager")]
    public class MachineManagerController
    {
        private readonly Socket _sock;
        private readonly ILogger<MachineManagerController> _logger;
        private readonly RemoteServerConfiguration _machineConfiguration;
        private readonly GlobalStateManager _globalStateManager;
        private static readonly HttpClient client = new HttpClient();
        private static readonly CancellationToken _cancelationToken = new CancellationToken();

        public MachineManagerController(
            GlobalStateManager globalStateManager,
            ILogger<MachineManagerController> logger, 
            IOptions<RemoteServerConfiguration> machineOptions)
        {
            _logger = logger;
            
            _globalStateManager = globalStateManager;
            _machineConfiguration = machineOptions.Value;
            _sock = new Socket(AddressFamily.InterNetwork, SocketType.Dgram, ProtocolType.Udp)
                {
                    EnableBroadcast = true
                };
        }

        [HttpGet("turnOn")]
        public async Task TurnOnMachine()
        {
            _globalStateManager.GlobalState.RemoteServerState = RemoteServerStateTypeModel.TurningOn;
            await _globalStateManager.UpdateStateAsync();
            
            IPAddress ip;
            
            _logger.LogInformation("Turning on machine configuration: " + _machineConfiguration.Address);
            
            try
            {
                var address = new Uri(_machineConfiguration.Address);
                
                Ping p = new Ping();
                PingReply r;
                r = p.Send(address.Host);

                if (r.Status == IPStatus.Success)
                {
                    ip = r.Address;
                    
                    _logger.LogInformation("Machine ip: " + ip);
                }
                else
                {
                    throw new Exception("Cant get remote ip");
                }
            }
            catch (Exception e)
            {
                _logger.LogError(e, "Cant get ip address of remote server");
                throw;
            }

            if (ip == null)
            {
                _logger.LogError("Invalid ip address + " + ip);
                throw new Exception("Invalid ip address + " + ip);
            }
            
            Task.Run( async () =>
            {
                try
                {
                    var count = 1;
                    while (count < 40)
                    {
                        var macParse = PhysicalAddress.Parse(_machineConfiguration.MacAddress);
                        byte[] magicPacket = BuildMagicPacket(macParse);

                        _sock.SendTo(magicPacket, magicPacket.Length, SocketFlags.None, new IPEndPoint(ip, 9));
                        await Task.Delay(1000);
                        count++;
                    }
                }
                catch (Exception e)
                {
                    _logger.LogError(e, "Some error happened on send magic packet.");
                }
                
                _globalStateManager.GlobalState.RemoteServerState = RemoteServerStateTypeModel.Off;
                await _globalStateManager.UpdateStateAsync();
            });
        }

        [HttpGet("turnOff")]
        public async Task TurnOffMachine()
        {
            await client.GetAsync(_machineConfiguration.Address + "/api/machine-manager/shutdown");
            
            _globalStateManager.GlobalState.RemoteServerState = RemoteServerStateTypeModel.TurningOff;
            await _globalStateManager.UpdateStateAsync();
        }

        private static byte[] BuildMagicPacket(PhysicalAddress macAddress)
        {
            byte[] macBytes = macAddress.GetAddressBytes(); // Convert 48 bit MAC Address to array of bytes
            byte[] magicPacket = new byte[102];
            for (int i = 0; i < 6; i++) // 6 times 0xFF
            {
                magicPacket[i] = 0xFF;
            }
            for (int i = 6; i < 102; i += 6) // 16 times MAC Address
            {
                Buffer.BlockCopy(macBytes, 0, magicPacket, i, 6);
            }
            return magicPacket; // 102 Byte Magic Packet
        }
    }
}
