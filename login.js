// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.6.4/firebase-auth.js";

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

const form = document.querySelector(".form-login");
const emailInput = document.querySelector(".form-username-login");
const pwdInput = document.querySelector(".form-pwd-login");
const submitBtn = document.querySelector(".form-submit-login");

submitBtn.addEventListener("click", (e) => {
    alert("HI");

  const email = emailInput.value;
  const pwd = pwdInput.value;

  console.log(email, pwd);

  e.preventDefault();

  signInWithEmailAndPassword(auth, email, pwd)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("IN");
      window.location.href="schedule.html";
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
});
