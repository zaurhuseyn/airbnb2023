// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOYH8eVVBNDV5eSTNfUW_xsytIGcCQK5g",
  authDomain: "exercise-1ec6e.firebaseapp.com",
  projectId: "exercise-1ec6e",
  storageBucket: "exercise-1ec6e.appspot.com",
  messagingSenderId: "840233630035",
  appId: "1:840233630035:web:0c5c15bf66ae81f43109a6",
  measurementId: "G-8SXSL4G5E3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);