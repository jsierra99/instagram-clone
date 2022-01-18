// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTn7pwj62ivuR4ak-ogoyK-l-nYNKsEBs",
  authDomain: "instagram-clone-8b023.firebaseapp.com",
  projectId: "instagram-clone-8b023",
  storageBucket: "instagram-clone-8b023.appspot.com",
  messagingSenderId: "135680651563",
  appId: "1:135680651563:web:27a3dc2ad8a8ecc33c556e"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };