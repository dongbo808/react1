// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAk9DNcWUeqII79-GtuKCy-1d-qL9AYWV4",
  authDomain: "sparta-react-basic-796b4.firebaseapp.com",
  projectId: "sparta-react-basic-796b4",
  storageBucket: "sparta-react-basic-796b4.appspot.com",
  messagingSenderId: "603272566485",
  appId: "1:603272566485:web:be0b7c83a67d5eb0b2f45c",
  measurementId: "G-9L57GH3P66"
};


initializeApp(firebaseConfig);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);

export const db = getFirestore();