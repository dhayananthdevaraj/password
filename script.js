const passwordInput = document.getElementById("password");
const checkBtn = document.getElementById("checkBtn");
const strength = document.getElementById("strength");
const input = document.getElementById("input");

// Check password strength on button click
checkBtn.addEventListener("click", () => {
  const password = passwordInput.value;
  const strengthValue = checkPasswordStrength(password);
  strength.textContent = `Password strength: ${strengthValue}`;
  input.textContent = `Given Password: ${password}`;
  
  if (strengthValue <= 2) {
    strength.style.color = "red";
  } else if (strengthValue <= 4) {
    strength.style.color = "yellow";
  } else {
    strength.style.color = "green";
  }
});

// Check password strength function
function checkPasswordStrength(password) {
  let strength = 0;
  if (password.length >= 8) {
    strength += 1;
  }
  if (password.match(/[a-z]+/)) {
    strength += 1;
  }
  if (password.match(/[A-Z]+/)) {
    strength += 1;
  }
  if (password.match(/[0-9]+/)) {
    strength += 1;
  }
  if (password.match(/[$@#&!]+/)) {
    strength += 1;
  }
  if (password.length >= 12) {
    strength += 1;
  }
  return strength;
}
