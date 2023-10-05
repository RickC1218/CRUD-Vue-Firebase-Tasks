// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: "crud-vue-a4007",
  storageBucket: import.meta.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.VITE_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };