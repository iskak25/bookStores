//////////

import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyATrYMWslxDnOG-tiQEijpHcbYrt0mn3sg",
  authDomain: "goldort-94fcd.firebaseapp.com",
  projectId: "goldort-94fcd",
  storageBucket: "goldort-94fcd.appspot.com",
  messagingSenderId: "597990577646",
  appId: "1:597990577646:web:6720d70d63b140a8e7eaff",
  measurementId: "G-YHF8CEXB8F",
};
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
