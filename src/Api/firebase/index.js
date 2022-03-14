// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiUjcGTgmx7N_1NLXuy3vTgNPPEWZhabU",
  authDomain: "react-deploy-3bade.firebaseapp.com",
  projectId: "react-deploy-3bade",
  storageBucket: "react-deploy-3bade.appspot.com",
  messagingSenderId: "176631878305",
  appId: "1:176631878305:web:e25814853054627f51d6e0",
  measurementId: "G-ETLEYXQ0GC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);