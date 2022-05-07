using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.WebSockets;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Tac.Stream.Tv.Shared.Notifications
{
    public class NotificationHandler
    {
        public NotificationHandler()
        {
            WebScoketState = new List<WebSocket>();
            WebSocketPreview = new List<WebSocket>();
        }

        public List<WebSocket> WebScoketState;
        public List<WebSocket> WebSocketPreview;

        public async Task AddWebScoketState(WebSocket webSocket, object message)
        {
            lock (WebScoketState)
            {
                WebScoketState.Add(webSocket);
            }

            await Echo(webSocket, message);
        }

        public async Task AddWebSocketPreview(WebSocket webSocket)
        {
            lock (WebSocketPreview)
            {
                WebSocketPreview.Add(webSocket);
            }

            await Echo(webSocket, null);
        }

        public async Task Echo(WebSocket webSocket, object message)
        {
            await SendNotification(webSocket, message);

            var buffer = new byte[1024 * 4];
            WebSocketReceiveResult result = await webSocket.ReceiveAsync(new ArraySegment<byte>(buffer), CancellationToken.None);
            while (!result.CloseStatus.HasValue)
            {}
            await webSocket.CloseAsync(result.CloseStatus.Value, result.CloseStatusDescription, CancellationToken.None);
        }

        public async Task SendNotificationToWebScoketStateAll(object message)
        {
            await SendNotificationToAll(WebScoketState, message);
        }

        public async Task SendNotificationToWebSocketPreviewAll(object message)
        {
            await SendNotificationToAll(WebSocketPreview, message);
        }

        public async Task SendNotificationToAll(List<WebSocket> webSockets, object message)
        {
            IEnumerable<WebSocket> toSentTo;

            lock (webSockets)
            {
                toSentTo = webSockets.Where(x => x.State == WebSocketState.Open).ToList();
            }

            var tasks = toSentTo.Select(websocketConnection =>
            {
                return SendNotification(websocketConnection, message);
            });

            await Task.WhenAll(tasks);
        }

        private async Task SendNotification(WebSocket webSocket, object message)
        {
            var bytes = Encoding.Default.GetBytes(JsonConvert.SerializeObject(message));
            var arraySegment = new ArraySegment<byte>(bytes);
            await webSocket.SendAsync(arraySegment, WebSocketMessageType.Text, true, CancellationToken.None);
        }
    }
}
