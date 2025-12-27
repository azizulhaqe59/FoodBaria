importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"
);
// // Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyBkv5ZmiT5FZCPKLFGFhDoLDzoO3spPosQ",
  authDomain: "foodbaria-2dcc7.firebaseapp.com",
  projectId: "foodbaria-2dcc7",
  storageBucket: "foodbaria-2dcc7.firebasestorage.app",
  messagingSenderId: "908126665893",
  appId: "1:908126665893:web:c7179ddacea38dd050614c",
  measurementId: "G-C2QVEBD135",
};

firebase?.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase?.messaging();

messaging.onBackgroundMessage(function (payload) {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
