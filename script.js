const passwordInput = document.getElementById("password");
const strengthText = document.getElementById("strength");
const messageText = document.getElementById("message");

passwordInput.addEventListener("input", checkStrength);

function checkStrength() {
    const password = passwordInput.value;

    if (password.length === 0) {
        strengthText.textContent = "";
        messageText.textContent = "";
        return;
    }

    if (password.length < 6) {
        strengthText.textContent = "Weak";
        strengthText.style.color = "red";
        messageText.textContent = "Password is too short";
    } 
    else if (password.length < 10) {
        strengthText.textContent = "Medium";
        strengthText.style.color = "orange";
        messageText.textContent = "Add symbols and numbers";
    } 
    else {
        strengthText.textContent = "Strong";
        strengthText.style.color = "green";
        messageText.textContent = "Good password";
    }
}
