// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwtSuTseGIT9mWCjvAs3mh0yhAG47Zjgw",
  authDomain: "e-commercecoder-6820b.firebaseapp.com",
  projectId: "e-commercecoder-6820b",
  storageBucket: "e-commercecoder-6820b.appspot.com",
  messagingSenderId: "207872004894",
  appId: "1:207872004894:web:680de1767b93e71d96ef0f",
  measurementId: "G-PXM63NY42P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);