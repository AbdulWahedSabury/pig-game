'use strict';
// select Elements
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
// dice role functionality
btnRoll.addEventListener('click', function () {
  // generate random roll
  let score = Math.trunc(Math.random() * 6) + 1;
  console.log(score);
  dice.classList.remove('hidden');
  // display roll
  dice.src = `dice-${score}.png`;
  courentNumber += score;

  if(score !== 1){
    courent0El.textContent = courentNumber;
  }else{

  }
});
