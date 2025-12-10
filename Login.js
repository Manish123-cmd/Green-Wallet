// LOGIN VALIDATION & GOOGLE BLOCK
const loginScreen = document.getElementById("loginScreen");
const appWrapper = document.getElementById("appWrapper");
const emailInput = document.querySelector("input[type='email']");
const passwordInput = document.querySelector("input[type='password']");

const googleBtn = document.querySelector(".login-google");
const loginBtn = document.getElementById("fakeSignInBtn");
const errorBox = document.getElementById("loginError");

googleBtn.addEventListener("click", () => {
  alert("Google login not implemented.");
});

loginBtn.addEventListener("click", () => {
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (!email || !password) {
    errorBox.textContent = "Email and password are required.";
    errorBox.style.display = "block";
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    errorBox.textContent = "Invalid email format.";
    errorBox.style.display = "block";
    return;
  }

  errorBox.style.display = "none";
  loginScreen.style.display = "none";
  appWrapper.style.display = "block";
});

// SIGN OUT
document.getElementById("signOutBtn").addEventListener("click", () => {
  emailInput.value = "";
  passwordInput.value = "";
  appWrapper.style.display = "none";
  loginScreen.style.display = "flex";
});

