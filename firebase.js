import { getApp, getApps, initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBOOaz7Ic3hmvzZqh0Bf5K0XBn92PuXnEs",
  authDomain: "react-natove-food-delivery-app.firebaseapp.com",
  projectId: "react-natove-food-delivery-app",
  storageBucket: "react-natove-food-delivery-app.appspot.com",
  messagingSenderId: "421312459627",
  appId: "1:421312459627:web:12b43c02c36dd39bbad22e",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export { firebase };
