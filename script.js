'use strict';
let score_0 = document.querySelector('#score--0');
let score_1 = document.querySelector('#score--1');
let dice = document.querySelector('.dice');
let btn_new = document.querySelector('.btn--new');
let btn_roll = document.querySelector('.btn--roll');
let btn_hold = document.querySelector('.btn--hold');
let current_0 = document.querySelector('#current--0');
let current_1 = document.querySelector('#current--1');
let currentScore = 0;
let activeplayer = 0;
let score = [0, 0];
let playing = true;
//Starting Conditions
const init = () => {
  console.log(typeof score_0);
  dice.classList.add('hidden');
  score_0.textContent = 0;
  score_1.textContent = 0;
  currentScore = 0;
  activeplayer = 0;
  score = [0, 0];
  playing = true;
};
init();
//
const switchPlayer = () => {
  document.getElementById(`current--${activeplayer}`).textContent = 0;
  document
    .querySelector(`.player--${activeplayer}`)
    .classList.remove('player--active');
  currentScore = 0;
  activeplayer = activeplayer === 0 ? 1 : 0;
  document
    .querySelector(`.player--${activeplayer}`)
    .classList.add('player--active');
};
//Rolling Dice Functionality
const rolldice = () => {
  if (playing) {
    let rndm = Math.trunc(Math.random() * 6 + 1);
    console.log(rndm);
    //display dice
    dice.classList.remove('hidden');
    dice.src = `dice-${rndm}.png`;
    //CHecking Rolled Dice if 1 then switch to next Player
    if (rndm != 1) {
      currentScore += rndm;
      //console.log(`current--${activeplayer}`);
      document.getElementById(
        `current--${activeplayer}`
      ).textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
};

btn_roll.addEventListener('click', rolldice);
btn_hold.addEventListener('click', function () {
  if (playing) {
    //Adding Score to active Player
    score[activeplayer] += currentScore;
    document.getElementById(`score--${activeplayer}`).textContent =
      score[activeplayer];
    //Comparing the Score
    if (score[activeplayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.add('player--winner');
    }
  }
  switchPlayer();
});

btn_new.addEventListener('click', init);
