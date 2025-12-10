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
