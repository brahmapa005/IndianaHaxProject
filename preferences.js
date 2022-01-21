// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-firestore.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.6.4/firebase-auth.js";

import { doc, setDoc } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-firestore.js"; 

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBTiVEYAQa1IGR187F1TFFi-1SHRJb7tyw",

  authDomain: "indianahax.firebaseapp.com",

  projectId: "indianahax",

  storageBucket: "indianahax.appspot.com",

  messagingSenderId: "278562871441",

  appId: "1:278562871441:web:16f3e2341a0fe6d8948730",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore();



const logoutBtn = document.querySelector(".logout-btn");
const prefSubmitBtn = document.querySelector(".preferences-submit-btn");
const pref1 = document.querySelector("#one");
// const pref2 = document.querySelector("#2");
// const pref3 = document.querySelector("#3");
// const pref4 = document.querySelector("#4");
// const pref5 = document.querySelector("#5");
// const pref6 = document.querySelector("#6");
// const pref7 = document.querySelector("#7");
// const prefer = document.querySelector("#prefer");

logoutBtn.addEventListener("click", (e) => {
  e.preventDefault();

  auth.signOut().then(() => {
    console.log("user signed out");
    window.location.href="index.html";
  });
});

prefSubmitBtn.addEventListener("click", (e) => {
    e.preventDefault();
     setDoc(doc(db, "Preferences", "PGRWnqbORabtzX8vv9sQauT17k42"), {
        1: pref1.value
      });

});


