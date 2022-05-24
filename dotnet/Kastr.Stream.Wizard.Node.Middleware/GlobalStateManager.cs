using System;
using System.Threading.Tasks;
using Kastr.Stream.Wizard.Shared.Notifications;
using Tac.Stream.Tv.Server.Manager.Entities;

namespace Tac.Stream.Tv.Server.Manager
{
    public class GlobalStateManager
    {
        private NotificationHandler _notificationHandler;

        public GlobalStateManager(NotificationHandler notificationHandler)
        {
            _notificationHandler = notificationHandler;
            GlobalState = new GlobalState();
        }

        public GlobalState GlobalState { get; set; }

        public async Task UpdateState(GlobalState oldState)
        {
            GlobalState = oldState;

            await _notificationHandler.SendNotificationToWebScoketStateAll(GlobalState);
        }

        public async Task UpdateState()
        {
            await _notificationHandler.SendNotificationToWebScoketStateAll(GlobalState);
        } 
    }
}
