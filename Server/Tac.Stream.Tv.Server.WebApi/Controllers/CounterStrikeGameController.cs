using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Tac.Stream.Tv.Server.Manager;

namespace Tac.Stream.Tv.Server.WebApi.Controllers
{

    [Route("api/counter-strike")]
    public class CounterStrikeGameController : Controller
    {
        private CounterStrikeManager _counterStrikeGameManager;

        public CounterStrikeGameController(CounterStrikeManager counterStrikeGameManager)
        {
            _counterStrikeGameManager = counterStrikeGameManager;
        }

        [HttpGet("start")]
        public async Task StartAndConnect([FromQuery] string ip)
        {
            await _counterStrikeGameManager.StartAndConnect(ip);
        }

        [HttpGet("close")]
        public void Close()
        {
            _counterStrikeGameManager.Close(false);
        }
    }
}
