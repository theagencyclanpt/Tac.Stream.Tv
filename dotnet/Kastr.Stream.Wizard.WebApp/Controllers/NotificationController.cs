using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Net;
using System.Net.WebSockets;
using System.Threading.Tasks;
using Kastr.Stream.Wizard.Shared.Notifications;

namespace Kastr.Stream.Wizard.WebApp.Controllers
{
    [Route("client/notification")]
    public class NotificationController : Controller
    {
        private readonly ILogger<NotificationController> _logger;
        private NotificationHandler _notificationHandler;
        private GlobalStateManager _globalStateManager;

        public NotificationController(
            ILogger<NotificationController> looger,
            GlobalStateManager globalStateManager,
            NotificationHandler notificationHandler)
        {
            _logger = looger;
            _notificationHandler = notificationHandler;
            _globalStateManager = globalStateManager;
        }

        [HttpGet("subscribe")]
        public async Task StateSubscribeAsync()
        {
            if (HttpContext.WebSockets.IsWebSocketRequest)
            {
                using WebSocket webSocket = await
                                   HttpContext.WebSockets.AcceptWebSocketAsync();

                await _notificationHandler.AddWebScoketState(webSocket, _globalStateManager.GlobalState);
            }
            else
            {
                HttpContext.Response.StatusCode = (int)HttpStatusCode.BadRequest;
            }
        }
    }
}
