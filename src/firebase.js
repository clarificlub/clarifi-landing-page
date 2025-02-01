// import { initializeApp } from 'firebase/app';
// import { getDatabase } from 'firebase/database';



// const firebaseConfig = {
//   apiKey: "AIzaSyC_eqHpGIxNalnkuFOSWlH2U8LBqd_p_LI",
//   authDomain: "clarifi-email-list.firebaseapp.com",
//   databaseURL: "https://clarifi-email-list-default-rtdb.firebaseio.com",
//   projectId: "clarifi-email-list",
//   storageBucket: "clarifi-email-list.firebasestorage.app",
//   messagingSenderId: "911822083025",
//   appId: "1:911822083025:web:12fa543ad1332127df06f0",
//   measurementId: "G-FV2ZMDZYX4"
// };

// const app = initializeApp(firebaseConfig);
// export const db = getDatabase(app);


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);