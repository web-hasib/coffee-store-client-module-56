// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbmGgi2klALWb4tcGmw0FgqypjpEevAQs",
  authDomain: "coffee-store-app-c3589.firebaseapp.com",
  projectId: "coffee-store-app-c3589",
  storageBucket: "coffee-store-app-c3589.firebasestorage.app",
  messagingSenderId: "58965686826",
  appId: "1:58965686826:web:4d06ca7058f9c24b672153"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
