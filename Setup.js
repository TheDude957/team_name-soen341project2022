// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTe5i6NnFoEIoxaxosnNcQOhlNWQQ6a5U",
  authDomain: "soen341webstore-5485f.firebaseapp.com",
  projectId: "soen341webstore-5485f",
  storageBucket: "soen341webstore-5485f.appspot.com",
  messagingSenderId: "237531517187",
  appId: "1:237531517187:web:32fbda1fddcab70091d936",
  measurementId: "G-0Q02N1HMJV",
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
