"use strict";

// Selecting HTML objects
const btnRules = document.querySelector(".btn--rules");
const btnModalClose = document.querySelector(".btn--close");
const modalRules = document.querySelector(".rules");
const overlay = document.querySelector(".overlay");

// Opening Modal window
btnRules.addEventListener("click", function () {
  overlay.classList.remove("hidden");
  modalRules.classList.remove("hidden");
});

// Closing Modal window
function closeModal() {
  overlay.classList.add("hidden");
  modalRules.classList.add("hidden");
}

btnModalClose.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
