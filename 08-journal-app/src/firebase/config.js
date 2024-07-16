import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyBI0MfVHDfHtudYa0XpvRetPCtTbXVGnT4",
  authDomain: "react-cursos-d6e27.firebaseapp.com",
  projectId: "react-cursos-d6e27",
  storageBucket: "react-cursos-d6e27.appspot.com",
  messagingSenderId: "808853718179",
  appId: "1:808853718179:web:d19beac69fb768d6d4eb16",
};
// Initialize Firebase

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
