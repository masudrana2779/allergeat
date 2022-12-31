// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import admin from "firebase-admin";
import serviceAccount from "../../json/allergeat-350a3-2e3eeb088a22.json";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAA95337KsJywf_R9J2ht62B-Daqdua-dY",
//   authDomain: "allergeat-350a3.firebaseapp.com",
//   projectId: "allergeat-350a3",
//   storageBucket: "allergeat-350a3.appspot.com",
//   messagingSenderId: "498286851465",
//   appId: "1:498286851465:web:537768a7008f1a11bc9d58",
//   measurementId: "G-WLQRJYMZQP",
// };

if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  } catch (error) {
    console.log("Firebase admin initialization error", error.stack);
  }
}

export default admin.firestore();
