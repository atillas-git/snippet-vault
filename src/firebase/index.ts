import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBBGnanBN-pZc2znuciZPC-XIzRKZ-FsbU",
  authDomain: "document-dev-f5ed9.firebaseapp.com",
  projectId: "document-dev-f5ed9",
  storageBucket: "document-dev-f5ed9.appspot.com",
  messagingSenderId: "823198266114",
  appId: "1:823198266114:web:344f0151b2ff0d7404881b",
  measurementId: "G-LYJT0PG143",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);