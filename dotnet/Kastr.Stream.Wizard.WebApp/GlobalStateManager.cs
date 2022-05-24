using System;
using System.Threading.Tasks;
using Kastr.Stream.Wizard.Shared.Notifications;

namespace Kastr.Stream.Wizard.WebApp
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

        public async Task UpdateStateAsync()
        {
            await _notificationHandler.SendNotificationToWebScoketStateAll(GlobalState);
        }
    }

    public class GlobalState
    {
        public RemoteServerStateTypeModel RemoteServerState { get; set; }

        public DateTimeOffset? LastSyncDate { get; set; }
    }
}
