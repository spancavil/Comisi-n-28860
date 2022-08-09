// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSsOf2lFyhD6G_mwhrWlYNx6_HCbhjpjs",
  authDomain: "reactjs-28860.firebaseapp.com",
  projectId: "reactjs-28860",
  storageBucket: "reactjs-28860.appspot.com",
  messagingSenderId: "1028008879263",
  appId: "1:1028008879263:web:25c9b95b02704097fa6eaa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);