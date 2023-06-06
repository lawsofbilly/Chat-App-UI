import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDI4nK6-zFLnKzREpqsArUBsK-doMgQyAE",
  authDomain: "chat6-c5fd8.firebaseapp.com",
  projectId: "chat6-c5fd8",
  storageBucket: "chat6-c5fd8.appspot.com",
  messagingSenderId: "165555546391",
  appId: "1:165555546391:web:b3fcc73a98128ecaf4af52",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
