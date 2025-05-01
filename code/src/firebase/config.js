// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwgL9faje44fqSy_46bRCr8MKo2LlBwEk",
  authDomain: "grade-insight.firebaseapp.com",
  projectId: "grade-insight",
  storageBucket: "grade-insight.firebasestorage.app",
  messagingSenderId: "799245823833",
  appId: "1:799245823833:web:5c3dd74e4f50201b5f2648"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);