// firebase.ts
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCJOyUNg7cAZIIjz9C6qOwF6tvXlketwHg",
  authDomain: "starlit-oven-417611.firebaseapp.com",
  projectId: "starlit-oven-417611",
  storageBucket: "starlit-oven-417611.appspot.com",
  messagingSenderId: "799888990137",
  appId: "1:799888990137:web:777c8ae9a4b196f43e2068",
  measurementId: "G-QVETWJQR80",
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, auth };