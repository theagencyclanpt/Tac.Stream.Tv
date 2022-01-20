using System.Threading.Tasks;
using Tac.Stream.Tv.Shared.Notifications;

namespace Tac.Stream.Tv.Client.WebApp
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
    }

    public class GlobalState
    {
        public RemoteServerStateTypeModel RemoteServerState { get; set; }
    }
}
