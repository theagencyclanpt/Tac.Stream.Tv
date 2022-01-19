using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using Tac.Stream.Tv.Obs;

namespace Tac.Stream.Tv.WebApi.Controllers
{
    [Route("api/obs")]
    public class ObsController : Controller
    {
        private ObsManager _obsManager;

        public ObsController(ObsManager obsManager)
        {
            _obsManager = obsManager;
        }

        [HttpGet("start")]
        public async Task StartAsync()
        {
            await _obsManager.StartAsync();
        }

        [HttpGet("start/stream")]
        public async void StartStreamAsync()
        {
            await _obsManager.StartStreamAsync();
        }

        [HttpGet("stop/stream")]
        public async Task StopStreamAsync()
        {
            await _obsManager.StopStreamAsync();
        }

        [HttpGet("scenes")]
        public List<string> GetAllScenes()
        {
            return _obsManager.GetScenes();
        }

        [HttpGet("change-current-scene")]
        public void ChangeCurrentSceneByName([FromQuery] string scene)
        {
            _obsManager.SetCurrentSceneByName(scene);
        }

        [HttpGet("change-preview-scene")]
        public void ChangePreviewSceneByName([FromQuery] string scene)
        {
            _obsManager.SetPreviewSceneByName(scene);
        }

        [HttpGet("close")]
        public async Task CloseAsync()
        {
            await _obsManager.CloseAsync(false);
        }
    }
}
