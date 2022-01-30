let validateForm = () => {
    console.log("validateForm()");

    if (firstName.validity.valid
        && lastName.validity.valid
        && email.validity.valid
        && tel.validity.valid
        && password.validity.valid
        && passwordConfirm.validity.valid) {
        
            alert("signed up!");
    }
}

let form = document.querySelector("#signupform");

let createBtn = document.querySelector("#createBtn");
createBtn.addEventListener('click', validateForm);

let firstName = document.querySelector("#firstname");
let firstNameError = document.querySelector("#firstname + span.error");
firstNameError.style.display = "none";

firstName.addEventListener('input', () => {
    if (firstName.validity.valid) {
        firstName.classList.add("valid");
        firstNameError.style.display = "none";
    }
    else if (firstName.validity.tooShort) {
        firstNameError.style.display = "block";
    }
})

let lastName = document.querySelector("#lastname");
let lastNameError = document.querySelector("#lastname + span.error");
lastNameError.style.display = "none";

lastName.addEventListener('input', () => {
    if (lastName.validity.valid) {
        lastName.classList.add("valid");
        lastNameError.style.display = "none";
    }
    else if (lastName.validity.tooShort) {
        lastNameError.style.display = "block";
    }
})

let email = document.querySelector("#email");
let emailError = document.querySelector("#email + span.error");
emailError.style.display = "none";

email.addEventListener('input', () => {
    if (email.validity.valid) {
        email.classList.add("valid");
        emailError.style.display = "none";
    }
    else if (email.validity.typeMismatch) {
        emailError.style.display = "block";
    }
})

let tel = document.querySelector("#tel");

let password = document.querySelector("#password");
let passwordError = document.querySelector("#password + span.error");
passwordError.style.display = "none";

password.addEventListener('input', () => {
    if (password.validity.valid) {
        password.classList.add("valid");
        passwordError.style.display = "none";
    }
    else if (password.validity.tooShort) {
        passwordError.innerText = "Password must be at least 8 characters long.";
        passwordError.style.display = "block";
    }
    else if (password.validity.patternMismatch) {
        passwordError.innerText = "Password must contain at least 1 upper and lower case character, and 1 number/special character.";
        passwordError.style.display = "block";
    }
})

let passwordConfirm = document.querySelector("#passwordconfirm");
let passwordConfirmError = document.querySelector("#passwordconfirm + span.error");
passwordConfirmError.style.display = "none";

passwordConfirm.addEventListener('input', () => {
    if (passwordConfirm.validity.tooShort) {
        passwordConfirmError.innerText = "Password must be at least 8 characters long.";
        passwordConfirmError.style.display = "block";
    }
    else if (passwordConfirm.validity.patternMismatch) {
        passwordConfirmError.innerText = "Password must contain at least 1 upper and lower case character, and 1 number/special character.";
        passwordConfirmError.style.display = "block";
    }
    else if (password.value !== passwordConfirm.value) {
        passwordConfirmError.innerText = "Password must match";
        passwordConfirmError.style.display = "block";
    }
    else if (passwordConfirm.validity.valid) {
        passwordConfirm.classList.add("valid");
        passwordConfirmError.style.display = "none";
    }
})