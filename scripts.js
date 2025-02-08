let correctPassword = "366459";
let attempts = 3;

function enterDigit(digit) {
    let inputField = document.getElementById("password");
    if (inputField.value.length < 6) {
        inputField.value += digit;
    }
}

function clearPassword() {
    document.getElementById("password").value = "";
}

function deleteLastDigit() {
    let inputField = document.getElementById("password");
    inputField.value = inputField.value.slice(0, -1);
}

function checkPassword() {
    let inputPass = document.getElementById("password").value;
    let message = document.getElementById("message");

    if (inputPass === correctPassword) {
        message.innerHTML = "<strong>Access Granted!</strong>";
    } else {
        attempts--;
        if (attempts > 0) {
            message.innerHTML = `Access Denied! ${attempts} attempts left.`;
        } else {
            message.innerHTML = "Access blocked!";
            document.querySelectorAll('.num-button').forEach(button => button.disabled = true);
        }
    }
    clearPassword();
}

function grantAccess() {
    document.getElementById("message").innerHTML = "<strong>Access Granted!</strong>";
}