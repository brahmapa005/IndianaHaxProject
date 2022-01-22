// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.6.4/firebase-auth.js";

import {
  doc,
  getDoc,
  getFirestore,
} from "https://www.gstatic.com/firebasejs/9.6.4/firebase-firestore.js";

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

let countClasses = 7;

const logoutBtn = document.querySelector(".logout-btn");
const addClassBtn = document.querySelector(".add-class-btn");
const removeClassBtn = document.querySelectorAll(".remove-class-btn");
const schedDiv = document.querySelector(".schedule-content");
const actualSchedDiv = document.querySelector(".schedule-list");
const submitSchedBtn = document.querySelector(".sched-submit-btn");

const homework = [];

const nums = {
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
};

//const homeworkClasses {};

submitSchedBtn.addEventListener("click", async (e) => {
  e.preventDefault();

  const hw1 = document.querySelector("#one");
  const class1 = document.querySelector("#oneClass");
  const hw2 = document.querySelector("#two");
  const class2 = document.querySelector("#twoClass");
  const hw3 = document.querySelector("#three");
  const class3 = document.querySelector("#threeClass");
  const hw4 = document.querySelector("#four");
  const class4= document.querySelector("#fourClass");
  const hw5 = document.querySelector("#five");
  const class5 = document.querySelector("#fiveClass");
  const hw6 = document.querySelector("#six");
  const class6 = document.querySelector("#sixClass");
  const hw7 = document.querySelector("#seven");
  const class7 = document.querySelector("#sevenClass");

  const homeworkClasses = {};
  homeworkClasses[class1.value] = hw1.value;
  homeworkClasses[class2.value] = hw2.value;
  homeworkClasses[class3.value] = hw3.value;
  homeworkClasses[class4.value] = hw4.value;
  homeworkClasses[class5.value] = hw5.value;
  homeworkClasses[class6.value] = hw6.value;
  homeworkClasses[class7.value] = hw7.value;

//   Object.assign(homeworkClasses, class1.value, hw1.value);
//   Object.assign(homeworkClasses, class2.value, hw2.value);
//   Object.assign(homeworkClasses, class3.value, hw3.value);
//   Object.assign(homeworkClasses, class4.value, hw4.value);
//   Object.assign(homeworkClasses, class5.value, hw5.value);
//   Object.assign(homeworkClasses, class6.value, hw6.value);
//   Object.assign(homeworkClasses, class7.value, hw7.value);

//   const homeworkClasses {
//       class1.value:hw1.value,
//       class2.value:hw2.value,
//       class3.value:hw3.value,
//       [class4.value]:[hw4.value],
//       [class5.value]:[hw5.value],
//       [class6.value]:[hw6.value],
//       [class7.value]:[hw7.value],


//   }

  const id = localStorage.getItem("id");

  console.log("HI", id);

  const docRef = doc(db, "Preferences", id);

  const docSnap = await getDoc(docRef);

  console.log(docSnap.data());
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    console.log("HIIIIII", docSnap.data().pref);

    let difficulty = docSnap.data().pref;

    if (difficulty == "y") {
      for (var i = 1; i <= 7; i++) {
        homework.push(docSnap.data()[nums[i]]);
      }

      console.log(homework);

      homework.forEach((homework) => {
        let header = document.createElement("h2");

        console.log("HEYYYYYYYYY", homeworkClasses);

        header.innerHTML = homeworkClasses[homework];

        actualSchedDiv.appendChild(header);
      });
    } else if (difficulty == "n") {
      for (var i = 7; i >= 1; i--) {
        homework.push(docSnap.data()[nums[i]]);
      }

      homework.forEach((homework) => {
        let header = document.createElement("h2");

        header.innerHTML = homeworkClasses[homework];

        actualSchedDiv.appendChild(header);
      });
    }
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }

  //   db.collection("preferences")
  //     .doc(user.uid)
  //     .get()
  //     .then((snapshot) => {
  //       let difficulty = snapshot.difficult;

  //       if (difficulty == "y") {
  //         for (var i = 7; i >= 1; i++) {
  //           homework.push(snapshot.nums[i]);
  //         }

  //         homework.forEach((homework) => {
  //           let header = document.createElement("label");

  //           header.innerHTML = homework;

  //           actualSchedDiv.appendChild(header);
  //         });
  //       } else if (difficulty == "n") {
  //         for (var i = 7; i >= 1; i++) {
  //           homework.push(snapshot.nums[i]);
  //         }

  //         homework.forEach((homework) => {
  //           let header = document.createElement("label");

  //           header.innerHTML = homework;

  //           actualSchedDiv.appendChild(header);
  //         });
  //       }
  //     });
});

logoutBtn.addEventListener("click", (e) => {
  e.preventDefault();

  auth.signOut().then(() => {
    console.log("user signed out");
    window.location.href = "index.html";
  });
});

console.log(removeClassBtn.id);

removeClassBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    countClasses--;
    console.log("CLICKED");
    console.log(btn.id);

    const classField = document.querySelectorAll("#" + btn.id);
    classField.forEach((field) => {
      field.remove();
    });
    //classField.remove();
    console.log("removed");
  });
});

// removeClassBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log("CLICKED");
//   console.log(removeClassBtn.id);

//   const classField = document.querySelector("#" + removeClassBtn.id);
//   classField.remove();
//   console.log("removed");
// });

addClassBtn.addEventListener("click", (e) => {
  e.preventDefault();
  countClasses++;
  let label = document.createElement("label");
  let input = document.createElement("input");
  let btn = document.createElement("button");

  btn.type = "button";
  btn.innerHTML = "-";
  btn.className = "remove-class-btn";
  label.innerHTMl = "Class" + countClasses;
  input.type = "text";
  input.className = "preferences";

  document.body.appendChild(label);
  schedDiv.appendChild(input);
});
