export const environment = {
  production: true,
  apiUrl: "http://tv.sailer.pt:8081/api",
  notificationWebSocket: {
    state: "ws://tv.sailer.pt:8081/notification/state/subscribe",
    preview: "ws://tv.sailer.pt:8081/notification/preview/subscribe"
  }
};
