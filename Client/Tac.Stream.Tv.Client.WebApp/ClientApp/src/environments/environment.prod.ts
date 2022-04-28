export const environment = {
  production: true,
  apiUrl: "http://remote.kastr.pt:8081/api",
  notificationWebSocket: {
    state: "ws://remote.kastr.pt:8081/notification/state/subscribe",
    preview: "ws://remote.kastr.pt:8081/notification/preview/subscribe",
    client: "ws://localhost:44307/client/notification/subscribe"
    // client: "ws://localhost:59892/client/notification/subscribe"
    // client: "ws:// 10.0.0.238:8080/client/notification/subscribe"
  }
};
