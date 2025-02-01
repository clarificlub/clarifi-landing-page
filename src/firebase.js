// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_eqHpGIxNalnkuFOSWlH2U8LBqd_p_LI",
  authDomain: "clarifi-email-list.firebaseapp.com",
  databaseURL: "https://clarifi-email-list-default-rtdb.firebaseio.com",
  projectId: "clarifi-email-list",
  storageBucket: "clarifi-email-list.firebasestorage.app",
  messagingSenderId: "911822083025",
  appId: "1:911822083025:web:12fa543ad1332127df06f0",
  measurementId: "G-FV2ZMDZYX4"
};

// Initialize Firebase
let app;
try {
  app = initializeApp(firebaseConfig);
} catch (error) {
  console.error("Firebase initialization error:", error);
  // If we already have an app, get that instance
  app = initializeApp(firebaseConfig, "clarifi-app");
}

// Initialize services
const db = getDatabase(app);
let analytics = null;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

export { db };