const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const resetBtn = document.querySelector("#reset-btn");
const errorBox = document.getElementById("error-div");
let contentDiv = document.getElementById("content");
let successFul = document.getElementById("successfully-changed");
function validatePassword() {
    if(password.value.length < 8 || confirmPassword.value.length < 8) {
        errorBox.textContent = "Password cannot be smaller than 8 tokens";
        password.style.border = "3px solid red";
        confirmPassword.style.border = "3px solid red";
    }
    else if(!containsNumber(password.value)) {
        errorBox.textContent = "Password do not contains Integers";
        password.style.border = "3px solid red";
    }
    else if (password.value != confirmPassword.value) {
        errorBox.textContent = "Passwords do not match";
        confirmPassword.style.border = "3px solid red";
    }
    else {
        contentDiv.style.display = "none";
        successFul.style.display = "block";
    }
}
function containsNumber(str) {
    return /[0-9]/.test(str);
}
resetBtn.addEventListener("click", validatePassword);