// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAagNtNHQemp5kJxSaG_Sz8ee2Ze5IK0pE",
  authDomain: "proyecto-final-react-a54ee.firebaseapp.com",
  projectId: "proyecto-final-react-a54ee",
  storageBucket: "proyecto-final-react-a54ee.appspot.com",
  messagingSenderId: "625387266511",
  appId: "1:625387266511:web:5e56d1d9e6d12e58f3b2ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)