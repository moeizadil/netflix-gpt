// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOug82GPACfcWXfbzc6pL_PiwXiK-9Kz8",
  authDomain: "netflix-gpt-2b137.firebaseapp.com",
  projectId: "netflix-gpt-2b137",
  storageBucket: "netflix-gpt-2b137.firebasestorage.app",
  messagingSenderId: "1058568387955",
  appId: "1:1058568387955:web:b04a6263bcbbdd170e5906"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
