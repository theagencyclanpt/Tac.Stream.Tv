export const environment = {
  production: true,
  apiUrl: "http://remote.kastr.pt:8081/api",
  notificationWebSocket: {
    state: "ws://remote.kastr.pt:8081/notification/state/subscribe",
    preview: "ws://remote.kastr.pt:8081/notification/preview/subscribe",
    client: "ws://tv.theagencyclan.pt:8080/client/notification/subscribe"
  }
};
