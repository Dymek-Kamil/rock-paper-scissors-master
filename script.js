"use strict";

// Selecting HTML objects
const btnRules = document.querySelector(".btn--rules");
const btnModalClose = document.querySelector(".btn--close");
const modalRules = document.querySelector(".rules");
const overlay = document.querySelector(".overlay");
const optContainer = document.querySelector(".options--container");
const finalContainer = document.querySelector(".final--container");
const playerSection = document.querySelector(".player--section");

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

// Clicking element
optContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".option");
  console.log(clicked);

  if (!clicked) return;

  const choice = clicked.dataset.choice;
  console.log(choice);

  optContainer.classList.add("hidden");
  finalContainer.classList.remove("hidden");

  playerSection.insertAdjacentHTML(
    "beforeend",
    `<div class="option ${choice} final--option">
  <img src="images/icon-${choice}.svg" alt="${choice}"/>
</div>`
  );
});
