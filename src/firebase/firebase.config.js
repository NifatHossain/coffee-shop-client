// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsmyWDjmfdbzc0JBv2OMiY7r__p0xTgDo",
  authDomain: "coffee-shop-1318c.firebaseapp.com",
  projectId: "coffee-shop-1318c",
  storageBucket: "coffee-shop-1318c.appspot.com",
  messagingSenderId: "225132566523",
  appId: "1:225132566523:web:cce1a95366485df44b5d5e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;