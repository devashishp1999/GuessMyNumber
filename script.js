'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
const preValue = document.querySelector('.number').textContent;
const txtStartGuessing = document.querySelector(`.message`).textContent;
let highscore = 0;

// Refactor
const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);

  // when there is no input
  if (!guess) {
    displayMessage(`⛔ No number `);

    // when player wins the game
  } else if (guess === secretNumber) {
    displayMessage(`🎉 Correct Number! `);
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = `30rem`;

    if (score > highscore) {
      highscore = score;
      document.querySelector(`.highscore`).textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? `📉 Too high! ` : `📉 Too low!`);
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(
        `.message`
      ).textContent = `💔 You lose. try again! `;
      document.querySelector(`.score`).textContent = 0;
    }
  }
});

document.querySelector(`.again`).addEventListener(`click`, function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  //score
  document.querySelector(`.score`).textContent = 20;
  // message
  displayMessage(txtStartGuessing);
  // input field
  document.querySelector(`.guess`).value = ``;
  //number
  document.querySelector('.number').textContent = preValue;
  // number width
  document.querySelector(`.number`).style.width = `15rem`;
  // BG color
  document.querySelector(`body`).style.backgroundColor = `#222`;
});
