﻿using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using System;
using System.Net;
using System.Net.NetworkInformation;
using System.Net.Sockets;
using System.Threading;
using System.Threading.Tasks;

namespace Tac.Stream.Tv.Client.WebApp.Controllers
{
    [ApiController]
    [Route("api/machine-manager")]
    public class MachineManagerController
    {
        private readonly Socket _sock;
        private readonly ILogger<MachineManagerController> _logger;
        private readonly RemoteServerConfiguration _machineConfiguration;

        public MachineManagerController(ILogger<MachineManagerController> logger, IOptions<RemoteServerConfiguration> machineOptions)
        {
            _logger = logger;
            _machineConfiguration = machineOptions.Value;
            _sock = new Socket(AddressFamily.InterNetwork, SocketType.Dgram, ProtocolType.Udp)
                {
                    EnableBroadcast = true
                };
        }

        [HttpGet("turnOn")]
        public void TurnOnMachine()
        {
            try
            {
                var macParse = PhysicalAddress.Parse(_machineConfiguration.MacAddress);
                byte[] magicPacket = BuildMagicPacket(macParse);

                for (int i = 0; i < _machineConfiguration.NumberOfPackages; i++)
                {
                    _sock.SendTo(magicPacket, magicPacket.Length, SocketFlags.None, new IPEndPoint(IPAddress.Parse(_machineConfiguration.Address), 9));
                }
            }
            catch (Exception ex)
            {
                _logger.LogError("Some error on turn on machine.");
            }
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
