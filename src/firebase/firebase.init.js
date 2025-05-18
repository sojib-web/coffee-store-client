// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvxvxsj_W2tLMs6WHLf87xpWPPYuGF9O0",
  authDomain: "coffee-store-79d6c.firebaseapp.com",
  projectId: "coffee-store-79d6c",
  storageBucket: "coffee-store-79d6c.firebasestorage.app",
  messagingSenderId: "8850938622",
  appId: "1:8850938622:web:7c1257c481d76fab9163af",
  measurementId: "G-41ZXPMW2T6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
