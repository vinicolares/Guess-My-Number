'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof gess);
  if (!guess) {
    document.querySelector('.message').textContent = '🔴 No Number';
  } else if (guess == secretNumber) {
    document.querySelector('.message').textContent = '🟢 Corret Number';
    document.querySelector('body').style.backgroundColor = '#60B347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Lower 🔻';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = '😋 You lose the game...';
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Higher 🔺';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = '😋 You lose the game...';
    }
  }
});
let scoreH = 0;
document.querySelector('.again').addEventListener('click', function () {
  if (scoreH < document.querySelector('.score').textContent) {
    scoreH = document.querySelector('.score').textContent;
    //location.reload();
    document.querySelector('.highscore').textContent = scoreH;
  }
  document.querySelector('body').style.backgroundColor = '#000000';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = 20;
});
