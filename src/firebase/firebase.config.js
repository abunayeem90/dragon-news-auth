// Import the functions you need from the SDKs you need
import { getApp, initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBP6WBxBnaN5BShPzQJ3tTDaucFhgOhNhs",
  authDomain: "react-dragon-news-73a42.firebaseapp.com",
  projectId: "react-dragon-news-73a42",
  storageBucket: "react-dragon-news-73a42.appspot.com",
  messagingSenderId: "828821910257",
  appId: "1:828821910257:web:e0b35d449284432aa36f50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getApp(app);
export default auth;