import { getApp, getApps, initializeApp } from "firebase/app";
// import { initializeApp } from "firebase/app";
import {
  getFirestore,
  initializeFirestore,
  CACHE_SIZE_UNLIMITED,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getReactNativePersistence } from "firebase/auth/react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

// I'm using the example key here, I have the correct config
const firebaseConfig = {
  apiKey: "AIzaSyBOOaz7Ic3hmvzZqh0Bf5K0XBn92PuXnEs",
  authDomain: "react-natove-food-delivery-app.firebaseapp.com",
  projectId: "react-natove-food-delivery-app",
  storageBucket: "react-natove-food-delivery-app.appspot.com",
  messagingSenderId: "421312459627",
  appId: "1:421312459627:web:12b43c02c36dd39bbad22e",
};

const apps = getApps();
const app = !apps.length ? initializeApp(firebaseConfig) : getApp();
const firebaseAuth = getAuth(app);

firebaseAuth.setPersistence(getReactNativePersistence(AsyncStorage));
export const db = initializeFirestore(app, {
  experimentalAutoDetectLongPolling: true,
  cacheSizeBytes: CACHE_SIZE_UNLIMITED,
});

export { firebaseAuth };
