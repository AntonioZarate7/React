import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCopflvwsfGuKoy0z1Uuwb-83S0Gpqxo_k",
  authDomain: "musicfy-v2-ed015.firebaseapp.com",
  projectId: "musicfy-v2-ed015",
  storageBucket: "musicfy-v2-ed015.appspot.com",
  messagingSenderId: "216172539218",
  appId: "1:216172539218:web:06e632f06667047b219e8b"
};

export const initFirebase = initializeApp(firebaseConfig);