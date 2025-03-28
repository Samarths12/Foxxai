// firebase.js
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, doc, setDoc, getDoc, collection, addDoc } from "firebase/firestore";
import {
  getAuth,
  GoogleAuthProvider,
  setPersistence,
  browserLocalPersistence,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtFGTT1WOfvcjr2UfHDOMj_Kg1qwqzORg",
  authDomain: "convolabsqueue.firebaseapp.com",
  projectId: "convolabsqueue",
  storageBucket: "convolabsqueue.appspot.com",
  messagingSenderId: "987301055298",
  appId: "1:987301055298:web:788a79263d5f92616016db",
  measurementId: "G-KXXJGCLP88",
};

// Initialize Firebase only if it hasn't been initialized yet
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Set persistence to LOCAL
setPersistence(auth, browserLocalPersistence).catch((error) => {
  console.error("Error setting persistence:", error);
});

// Export all necessary instances and functions
export {
  app,
  db,
  auth,
  analytics,
  googleProvider,
  doc,
  setDoc,
  getDoc,
  collection,
  addDoc,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
};