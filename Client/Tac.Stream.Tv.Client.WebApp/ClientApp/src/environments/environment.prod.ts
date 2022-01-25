export const environment = {
  production: true,
  apiUrl: "http://tv.sailer.pt:8081/api",
  notificationWebSocket: {
    state: "ws://tv.sailer.pt:8081/notification/state/subscribe",
    preview: "ws://tv.sailer.pt:8081/notification/preview/subscribe",
    client: "ws://lab.theagencyclan.pt:8080/client/notification/subscribe"
    // client: "ws://localhost:59892/client/notification/subscribe"
    // client: "ws:// 10.0.0.238:8080/client/notification/subscribe"
  }
};
