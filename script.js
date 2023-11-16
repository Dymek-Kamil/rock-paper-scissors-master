"use strict";

// Selecting HTML objects
const btnRules = document.querySelector(".btn--rules");
const btnModalClose = document.querySelector(".btn--close");
const btnReplay = document.querySelector(".btn--replay");
const modalRules = document.querySelector(".rules");
const overlay = document.querySelector(".overlay");
const optContainer = document.querySelector(".options--container");
const finalContainer = document.querySelector(".final--container");
const playerSection = document.querySelector(".player--section");
const computerSection = document.querySelector(".computer--section");
const computerSectionCircle = document.querySelector(
  ".computer__section--circle"
);
const resultContainer = document.querySelector(".final__section--result");
const resultTitle = document.querySelector(".final__section--result h1");
const score = document.querySelector(".score--score");
const playerWin = document.querySelector(".player--win");
const computerWin = document.querySelector(".computer--win");

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

const computerChossing = function () {
  const randomNumber = Math.trunc(Math.random() * 3 + 1);
  if (randomNumber === 1) return "paper";
  else if (randomNumber === 2) return "rock";
  else return "scissors";
};
let computerChoice = computerChossing();

const win = function () {
  resultTitle.textContent = "YOU WIN";
  btnReplay.style.color = "var(--dark-text)";
  let scoreNum = Number(score.textContent);
  scoreNum++;
  score.textContent = scoreNum;
  playerWin.classList.remove("hidden");
};
const lose = function () {
  resultTitle.textContent = "YOU LOSE";
  btnReplay.style.color = "red";
  computerWin.classList.remove("hidden");
};
const draw = function () {
  resultTitle.textContent = "DRAW";
  btnReplay.style.color = "orange";
};

// Clicking element
optContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".option");

  // If clicked anywhere else don't do
  if (!clicked) return;

  const choice = clicked.dataset.choice;

  optContainer.classList.add("hidden");
  finalContainer.classList.remove("hidden");

  // Adding player choice
  playerSection.insertAdjacentHTML(
    "beforeend",
    `<div class="option ${choice} final--option">
  <img src="images/icon-${choice}.svg" alt="${choice}"/>
</div>`
  );

  // Adding computer choice
  const computerTime = setTimeout(
    function (choice) {
      computerSectionCircle.classList.add("hidden");
      computerSection.insertAdjacentHTML(
        "beforeend",
        `<div class="option ${choice} final--option">
      <img src="images/icon-${choice}.svg" alt="${choice}"/>
    </div>`
      );
    },
    3000,
    computerChoice
  );

  // Game logic
  const result = setTimeout(
    function (playerChoice, computerChoice) {
      if (playerChoice === "paper") {
        if (computerChoice === "rock") win();
        else if (computerChoice === "scissors") lose();
        else draw();
      }
      if (playerChoice === "rock") {
        if (computerChoice === "scissors") win();
        else if (computerChoice === "paper") lose();
        else draw();
      }
      if (playerChoice === "scissors") {
        if (computerChoice === "paper") win();
        else if (computerChoice === "rock") lose();
        else draw();
      }
      resultContainer.classList.remove("hidden");
    },
    5000,
    choice,
    computerChoice
  );
});

// Replay button

btnReplay.addEventListener("click", function () {
  resultContainer.classList.add("hidden");
  optContainer.classList.remove("hidden");
  finalContainer.classList.add("hidden");
  computerSectionCircle.classList.remove("hidden");
  document.querySelectorAll(".final--option").forEach((opt) => {
    opt.remove();
  });
  computerWin.classList.add("hidden");
  playerWin.classList.add("hidden");
  computerChoice = computerChossing();
});
