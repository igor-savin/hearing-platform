import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyAIa8SIB9Pe6U6oJ2xUS4o_oWQVUdbu6T8",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "audiology-associates-ca8ab.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "audiology-associates-ca8ab",
  storageBucket:
    process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "audiology-associates-ca8ab.firebasestorage.app",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "453581617026",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:453581617026:web:a8ea6a4db17114e57d019b"
};

export const firebaseEnabled = Boolean(
  firebaseConfig.apiKey &&
    firebaseConfig.authDomain &&
    firebaseConfig.projectId &&
    firebaseConfig.storageBucket &&
    firebaseConfig.appId
);

export const firebaseApp = firebaseEnabled
  ? getApps().length
    ? getApp()
    : initializeApp(firebaseConfig)
  : null;

export const db = firebaseApp ? getFirestore(firebaseApp) : null;
export const storage = firebaseApp ? getStorage(firebaseApp) : null;
export const auth = firebaseApp ? getAuth(firebaseApp) : null;
