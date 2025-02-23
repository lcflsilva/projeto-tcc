// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import {getAuth} from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDZcAKAEImyFPGYGRs4gQp6mumBc3FtTaQ",
//   authDomain: "tcc-firebase-612cf.firebaseapp.com",
//   projectId: "tcc-firebase-612cf",
//   storageBucket: "tcc-firebase-612cf.firebasestorage.app",
//   messagingSenderId: "966386170153",
//   appId: "1:966386170153:web:a13be7ef4cfeabbffa9f38"
// }; Não apaga essa parte ainda Rapaziada

//---------------------------------------------------------------------------------------------------------------

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3CpsqzIPU_a7wvJ74epjq2PQkFd99TnI",
  authDomain: "tcc-firebase-1e4f0.firebaseapp.com",
  projectId: "tcc-firebase-1e4f0",
  storageBucket: "tcc-firebase-1e4f0.firebasestorage.app",
  messagingSenderId: "787879149955",
  appId: "1:787879149955:web:a2e15446f30549d0e336b6",
  measurementId: "G-BXK1GCQLQQ"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_FIRESTORE = getFirestore(FIREBASE_APP);
export const FIREBASE_STORAGE = getStorage(FIREBASE_APP);
export const db = getFirestore(FIREBASE_APP);