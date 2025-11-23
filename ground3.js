// The Password Validator: You are building a password validation feature. 
// Create a function that checks if a given password meets the following criteria: at least 8 characters long, 
// contains both uppercase and lowercase letters,and includes at least one digit.

function validatePassword(password) {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);
    const isLongEnough = password.length >= 8;

    return hasUpperCase && hasLowerCase && hasDigit && isLongEnough;
}

// Example usage:
const password1 = "NIcePass123";
const password2 = "hellno";
console.log(validatePassword(password1)); // true
console.log(validatePassword(password2)); // false