// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDX5qINYtkaENynwBd4g1WhB_xWZHjDYWI",
    authDomain: "chatrealtimead.firebaseapp.com",
    databaseURL: "https://chatrealtimead-default-rtdb.firebaseio.com",
    projectId: "chatrealtimead",
    storageBucket: "chatrealtimead.appspot.com",
    messagingSenderId: "226754470529",
    appId: "1:226754470529:web:b3e16b0b0b97e2953ca380",
    measurementId: "G-23WHJKDH6Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getAnalytics(app);