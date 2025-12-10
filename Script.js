// WATER SLIDER
const range = document.getElementById("litersRange");
const rangeValue = document.getElementById("litersValue");

if (range && rangeValue) {
  range.addEventListener("input", () => {
    rangeValue.textContent = range.value + " L";
  });
}

// PARTNER TABS
const tabApply = document.getElementById("tabApply");
const tabAdmin = document.getElementById("tabAdmin");
const partnerFormTitle = document.getElementById("partnerFormTitle");
const partnerFormSubtitle = document.getElementById("partnerFormSubtitle");
const partnerSubmitBtn = document.getElementById("partnerSubmitBtn");

tabApply.addEventListener("click", () => {
  tabApply.classList.add("active");
  tabAdmin.classList.remove("active");
  partnerFormTitle.textContent = "Become a Green Partner";
  partnerFormSubtitle.textContent = "Join our eco network.";
  partnerSubmitBtn.textContent = "Submit Application";
});

tabAdmin.addEventListener("click", () => {
  tabAdmin.classList.add("active");
  tabApply.classList.remove("active");
  partnerFormTitle.textContent = "Admin Panel – Review Applications";
  partnerFormSubtitle.textContent = "Approve or reject submissions.";
  partnerSubmitBtn.textContent = "Save Decision";
});
