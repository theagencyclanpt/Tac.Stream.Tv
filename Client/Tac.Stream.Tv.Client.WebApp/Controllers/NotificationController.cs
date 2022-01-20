using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Threading.Tasks;
using Tac.Stream.Tv.Shared.Notifications;

namespace Tac.Stream.Tv.Client.WebApp.Controllers
{
    [Route("client/notification/subscribe")]
    public class NotificationController : Controller
    {
        private readonly ILogger<NotificationController> _logger;
        private NotificationHandler _notificationHandler;

        public NotificationController(ILogger<NotificationController> looger, NotificationHandler notificationHandler)
        {
            _logger = looger;
            _notificationHandler = notificationHandler;
            //_globalStateManager = globalStateManager;
        }

        [HttpGet]
        public async Task StateSubscribeAsync()
        {
            
        }
    }
}
