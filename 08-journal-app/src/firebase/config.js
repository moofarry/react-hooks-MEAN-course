// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBleix_UTWHgL3NbVoYG4Wrz8PhGdN2TfQ",
  authDomain: "react-journal-79e0b.firebaseapp.com",
  projectId: "react-journal-79e0b",
  storageBucket: "react-journal-79e0b.appspot.com",
  messagingSenderId: "504706332596",
  appId: "1:504706332596:web:43f72b4553950132a364e1",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
