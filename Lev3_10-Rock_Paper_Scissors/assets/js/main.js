// Onchange Event Rundenanzeige
function displayRounds(event) {
  event.preventDefault;

  const rounds = document.getElementById("displayRounds");

  // Variable für Anzeige der Rundenanzahl
  const roundSelected = Number(
    document.querySelector('input[name="rounds"]:checked').value
  );
  document.getElementById("roundSelected").style.display = "none";
  document.getElementById("rounds").innerHTML = `0 / ${roundSelected}`;
}

const choiceBtns = document.querySelectorAll(".choiceBtn");

// get Value von Buttons Schere/Stein/Papier
const SchereSteinPapier = Number(
  document.querySelector('input[name="SchereSteinPapier"]:checked').value
);

// Computer random Number für Zufallsgenerator
let randomNumber = Math.floor(Math.random() * 3) + 1;

// if (randomNumber == SchereSteinPapier) {
//   getElementById("results") = `${}`;
// }

//Reset
const Reset = () => {
  window.location.reload();
};

// var button = document.getElementById("clickme"),
//   count = 0;
// button.onclick = function() {
//   count += 1;
//   button.innerHTML = "Click me: " + count;
// };

// const playerText = document.querySelector("#playerText");
// const computerText = document.querySelector("#computerText");
// const resultText = document.querySelector("#resultText");

// const choiceBtns = document.querySelectorAll(".choiceBtn");

// let player;
// let computer;
// let result;

// choiceBtns.forEach((button) =>
//   button.addEventListener("click", () => {
//     player = button.textContent;
//     computerTurn();
//     playerText.textContent = `Player: ${player}`;
//     computerText.textContent = `Computer: ${computer}`;
//     resultText.textContent = checkWinner();
//   })
// );

// function computerTurn() {
//   const randNum = Math.floor(Math.random() * 3) + 1;

//   switch (randNum) {
//     case 1:
//       computer = "ROCK";
//       break;
//     case 2:
//       computer = "PAPER";
//       break;
//     case 3:
//       computer = "SCISSORS";
//       break;
//   }
// }

// function checkWinner() {
//   if (player == computer) {
//     return "Draw!";
//   } else if (computer == "ROCK") {
//     return player == "PAPER" ? "You Win!" : "You Lose!";
//   } else if (computer == "PAPER") {
//     return player == "SCISSORS" ? "You Win!" : "You Lose!";
//   } else if (computer == "SCISSORS") {
//     return player == "ROCK" ? "You Win!" : "You Lose!";
//   }
// }
