let emailInput = document.querySelector(".form-username");
let pwdInput = document.querySelector(".form-pwd");
let submitBtn = document.querySelector(".form-submit");

submitBtn.addEventListener("click", function() {
    console.log(emailInput.value);
    console.log(pwdInput.value);

    app.collection("Signups").add({
        Email: emailInput.value,
        Password: pwdInput.value,
    });
    

});

