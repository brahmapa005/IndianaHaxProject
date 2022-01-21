// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// let form = document.querySelector(".form-signup");
// let emailInput = document.querySelector(".form-username-signup");
// let pwdInput = document.querySelector(".form-pwd-signup");
// let submitBtn = document.querySelector(".form-submit-signup");

// submitBtn.addEventListener("click", function() {
//     console.log(emailInput.value);
//     console.log(pwdInput.value);

//     app.collection("Signups").add({
//         Email: emailInput.value,
//         Password: pwdInput.value,
//     });

// });

// submitBtn.addEventListener("click", (e) => {
//   e.preventDefault();

//   const email = emailInput.value;
//   const pwd = pwdInput.value;

//   console.log(email);
//   console.log(pwd);

//   //sign up the user
//   //   firebase
//   //     .auth()
//   //     .signInWithEmailAndPassword(email, pwd)
//   //     .then((userCredential) => {
//   //       // Signed in
//   //       var user = userCredential.user;
//   //       // ...
//   //     })
//   //     .catch((error) => {
//   //       var errorCode = error.code;
//   //       var errorMessage = error.message;
//   //     });
//   createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       // Signed in
//       const user = userCredential.user;
//       // ...
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       // ..
//     });
// });

// submitBtn.addEventListener("click", (e) => {
//   const email = emailInput.value;
//   const pwd = pwdInput.value;

//   const auth = getAuth();

//   e.preventDefault();
//   createUserWithEmailAndPassword(auth, email, pwd)
//     .then((userCredential) => {
//       // Signed in
//       const user = userCredential.user;
//       // ...
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       // ..
//     });
// });
