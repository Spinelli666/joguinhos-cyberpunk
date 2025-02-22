let correctPassword = "000000";
let specialPassword = "659723";
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
        setTimeout(() => {
            window.location.href = "success.html";
        }, 1000);
    } else if (inputPass === specialPassword) {
        message.innerHTML = "<strong>Access Granted!</strong>";
        setTimeout(() => {
            window.location.href = "dados.html";
        }, 1000);
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