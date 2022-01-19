using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace Tac.Stream.Tv.WebApi.Controllers
{
    [Route("api/machine-manager")]
    public class MachineManagerController : Controller
    {
        [HttpGet("shutdown")]
        public void ShutdonwMachineAsync()
        {
            Process.Start("shutdown", "/s /t 0");
        }
    }
}
