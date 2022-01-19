using System;
using System.Threading.Tasks;
using Tac.Stream.Tv.State.Notifications;
using Tac.Stream.Tv.WebApi.Models;

namespace Tac.Stream.Tv.State
{
    public class GlobalStateManager
    {
        private NotificationHandler _notificationHandler;

        public GlobalStateManager(NotificationHandler notificationHandler)
        {
            _notificationHandler = notificationHandler;
            GlobalState = new GlobalStateModel();
        }

        public GlobalStateModel GlobalState { get; set; }

        public async Task UpdateState(GlobalStateModel oldState)
        {
            GlobalState = oldState;

            await _notificationHandler.SendNotificationToWebScoketStateAll(GlobalState);
        }
    }
}
