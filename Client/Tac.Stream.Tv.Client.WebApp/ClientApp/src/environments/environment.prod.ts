export const environment = {
  production: true,
  apiUrl: "http://85.240.160.176:8081/api",
  notificationWebSocket: {
    state: "ws://85.240.160.176:8081/notification/state/subscribe",
    preview: "ws://85.240.160.176:8081/notification/preview/subscribe",
    client: "ws://stream.kastr.pt/client/notification/subscribe"
    // client: "ws://localhost:59892/client/notification/subscribe"
    // client: "ws:// 10.0.0.238:8080/client/notification/subscribe"
  }
};
