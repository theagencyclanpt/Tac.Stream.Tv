using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Net;
using System.Net.WebSockets;
using System.Threading.Tasks;
using Kastr.Stream.Wizard.Shared.Notifications;
using Tac.Stream.Tv.Server.Manager;

namespace Kastr.Stream.Wizard.Node.Controllers
{
    [Route("notification")]
    public class NotificationController : Controller
    {
        private NotificationHandler _notificationHandler;
        private GlobalStateManager _globalStateManager;

        public NotificationController(NotificationHandler notificationHandler, GlobalStateManager globalStateManager)
        {
            _notificationHandler = notificationHandler;
            _globalStateManager = globalStateManager;
        }

        [HttpGet("state/subscribe")]
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

        [HttpGet("preview/subscribe")]
        public async Task PreviewSubscribeAsync()
        {
            if (HttpContext.WebSockets.IsWebSocketRequest)
            {
                using WebSocket webSocket = await
                                   HttpContext.WebSockets.AcceptWebSocketAsync();

                await _notificationHandler.AddWebSocketPreview(webSocket);
            }
            else
            {
                HttpContext.Response.StatusCode = (int)HttpStatusCode.BadRequest;
            }
        }
    }
}
