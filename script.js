'use strict';
// select Elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');

const courent0El = document.getElementById('current--0');
const courent1El = document.getElementById('current--1');

const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const btnRoll = document.querySelector('.btn--roll');

// starting conditions
dice.classList.add('hidden');
score0El.textContent = 0;
score1El.textContent = 0;

let courentNumber = 0;
let activePlayer = 0;
const scores = [0, 0];
let gameStatus = true;
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  courentNumber = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// dice role functionality
btnRoll.addEventListener('click', function () {
  if (gameStatus) {
    // generate random roll
    let score = Math.trunc(Math.random() * 6) + 1;
    dice.classList.remove('hidden');
    // display roll
    dice.src = `dice-${score}.png`;
    courentNumber += score;
    // check if score is 1 or no
    if (score !== 1) {
      document.getElementById(`current--${activePlayer}`).textContent =
        courentNumber;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (gameStatus) {
    // add the courent score to total score
    scores[activePlayer] += courentNumber;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // if total score >= 100 finish game
    if (scores[activePlayer] >= 100) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      dice.classList.add('hidden');
      gameStatus = false;
    } else {
      // switch player
      switchPlayer();
    }
  }
});
