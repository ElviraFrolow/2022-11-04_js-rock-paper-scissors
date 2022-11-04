function displayRounds(event){
  event.preventDefault{

    const score = document.getElementById("displayRounds");
    const round5 = document.getElementById("round5").checked;
    const round10 = document.getElementById("round10").checked;
    const round15 = document.getElementById("round15").checked;
    const round20 = document.getElementById("round20").checked;
    

    if ()

  }
}

var button = document.getElementById("clickme"),
  count = 0;
button.onclick = function() {
  count += 1;
  button.innerHTML = "Click me: " + count;
};











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
