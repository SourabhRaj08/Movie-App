import { initializeApp } from "firebase/app";
import  { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAWmUnDliQQObixWPV9gHYNvrUsJajMtEQ",
  authDomain: "fir-auth-87a0b.firebaseapp.com",
  projectId: "fir-auth-87a0b",
  storageBucket: "fir-auth-87a0b.appspot.com",
  messagingSenderId: "248746573229",
  appId: "1:248746573229:web:172032607fb01e37f97524",
  measurementId: "G-SPT8RTMS71"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth()
export {app,auth}