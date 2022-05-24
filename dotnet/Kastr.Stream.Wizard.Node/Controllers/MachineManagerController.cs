using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace Kastr.Stream.Wizard.Node.Controllers
{
    [Route("api/machine-manager")]
    public class MachineManagerController : Controller
    {
        [HttpGet("shutdown")]
        public void ShutdonwMachineAsync()
        {
            Process.Start("shutdown", "/s /f /t 00");
        }

        [HttpGet("isOn")]
        public bool CheckIfIsOn()
        {
            return true;
        }
    }
}
