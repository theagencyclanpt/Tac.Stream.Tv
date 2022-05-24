using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Kastr.Stream.Wizard.WebApp.Controllers
{
    [ApiController]
    [Route("api/hud")]
    public class HudController
    {
        public string TName { get; set; } = "";
        
        [HttpGet("configuration")]
        public async Task<object> GetHudConfigurationAsync()
        {
            return new
            {
                Terrorist = new
                {
                    Name = "T",
                    Logo = ""
                },
                CounterTerrorist = new
                {
                    Name = "CT",
                    Logo = ""
                }
            };
        }

        [HttpPost("configuration")]
        public async Task UpdateHudConfigurationAsync()
        {
            
        }
    }
}