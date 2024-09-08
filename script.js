function verifyName() {
    let nameInput = document.getElementById('name');
    let name = nameInput.value.trim();
    if (name.length < 3) {
        alert("Name must be at least 3 characters long.");
        nameInput.focus();
        return false;
    }
    return true;
}

function validateEmail() {
    let emailInput = document.getElementById('email');
    let email = emailInput.value.trim();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
        alert("Please enter a valid email address.");
        emailInput.focus();
        return false;
    }
    return true;
}

function validatePassword() {
    let password = document.getElementById('password').value.trim();
    let confirmPassword = document.getElementById('confirm_password').value.trim();

    if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return false;
    }

    if (!/\d/.test(password) || !/[A-Za-z]/.test(password)) {
        alert("Password must contain both letters and numbers.");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }

    return true;
}

function togglePasswordVisibility() {
    let passwordField = document.getElementById('password');
    let confirmPasswordField = document.getElementById('confirm_password');
    let isPasswordVisible = passwordField.type === 'password';

    passwordField.type = isPasswordVisible ? 'text' : 'password';
    confirmPasswordField.type = isPasswordVisible ? 'text' : 'password';
}

function validate(event) {
    if (!verifyName() || !validateEmail() || !validatePassword()) {
        event.preventDefault();
        return false;
    }
    alert("Signup successful!");
    return true;
}

document.getElementById('signupForm').addEventListener('submit', validate);
