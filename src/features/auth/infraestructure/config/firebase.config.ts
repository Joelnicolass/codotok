// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBtExOH4vScaUWKWKGkJPMa9Y_8Nw73LKk",
  authDomain: "codo-a-codo-6dcfd.firebaseapp.com",
  projectId: "codo-a-codo-6dcfd",
  storageBucket: "codo-a-codo-6dcfd.appspot.com",
  messagingSenderId: "382826449414",
  appId: "1:382826449414:web:f000ca5bae56be80aa5187",
  measurementId: "G-L2Q04BHYKD",
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
