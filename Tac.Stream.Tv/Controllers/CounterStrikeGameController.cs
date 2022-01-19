using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Tac.Stream.Tv.Steam.Games;

namespace Tac.Stream.Tv.WebApi.Controllers
{

    [Route("api/counter-strike")]
    public class CounterStrikeGameController : Controller
    {
        private CounterStrikeGameManager _counterStrikeGameManager;

        public CounterStrikeGameController(CounterStrikeGameManager counterStrikeGameManager)
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
