const navLinks = document.querySelectorAll(".sidebar-link");
const screens = document.querySelectorAll(".screen");

// Switch pages
function showScreen(id) {
  screens.forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");

  navLinks.forEach(l =>
    l.classList.toggle("active", l.dataset.screen === id)
  );
}

navLinks.forEach(link => {
  link.addEventListener("click", () => showScreen(link.dataset.screen));
});

// Dashboard → Log Action shortcut
document.querySelectorAll("[data-screen-jump]").forEach(btn => {
  btn.addEventListener("click", () => showScreen(btn.dataset.screenJump));
});
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
