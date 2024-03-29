// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// export const environment = {
//   production: false,
//   apiUrl: "http://remote.kastr.pt/api",
//   notificationWebSocket: {
//     state: "ws://remote.kastr.pt/notification/state/subscribe",
//     preview: "ws://remote.kastr.pt/notification/preview/subscribe",
//     client: "ws://localhost:8080/client/notification/subscribe"
//     // client: "ws://localhost:59892/client/notification/subscribe"
//     // client: "ws:// 10.0.0.238:8080/client/notification/subscribe"
//   }
// };


export const environment = {
  production: false,
  apiUrl: "http://localhost:64590/api",
  notificationWebSocket: {
    state: "ws://localhost:64590/notification/state/subscribe",
    preview: "ws://localhost:64590/notification/preview/subscribe",
    client: "ws://localhost:8080/client/notification/subscribe"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
