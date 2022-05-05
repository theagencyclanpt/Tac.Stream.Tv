using System;
using System.Linq;
using System.Net;
using System.Net.NetworkInformation;
using System.Net.Sockets;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

namespace Tac.Stream.Tv.Client.WebApp.Controllers
{
    [ApiController]
    [Route("api/configuration")]
    public class ConfigurationController
    {
        private readonly RemoteServerConfiguration _machineConfiguration;

        public ConfigurationController(IOptions<RemoteServerConfiguration> machineOptions)
        {
            _machineConfiguration = machineOptions.Value;
        }

        [HttpGet("remote-api")]
        public async Task<object> RemoteIp()
        {
            try
            {
                var address = new Uri(_machineConfiguration.Address);
                var builder = new UriBuilder(address);
                
                Ping p = new Ping();
                PingReply r;
                r = p.Send(address.Host);

                if (r.Status == IPStatus.Success)
                {
                    builder.Host = r.Address.ToString();
                    
                    return new
                    {
                        Ip =  builder.Uri.ToString() 
                    };
                }
                else
                {
                    throw new Exception("Cant get remote ip");
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        } 
    }
}