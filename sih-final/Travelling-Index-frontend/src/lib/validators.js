// backend/utils/validators.js
function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function isValidPassword(password) {
  const regex = /^(?=.*\d).{6,}$/; // at least 6 chars, one number
  return regex.test(password);
}

function isValidUsername(username) {
  return username && username.trim().length > 0;
}

module.exports = { isValidEmail, isValidPassword, isValidUsername };
