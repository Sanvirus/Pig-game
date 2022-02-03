"use strict";

//Select elements
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

//Star
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

const swichPlayer = function() {
    document.getElementById(`current--${activePlayer}`).textContent =
        currentScore = 0;
    
    if(activePlayer === 0){
        activePlayer = 1;
    }else if(activePlayer === 1){
        activePlayer = 0;
    }
    player0El.classList.toggle("player--active");
    player1El.classList.toggle("player--active");
};

// Rolling dice functionality
btnRoll.addEventListener("click", function() {
    // 1.Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    // 2. Display dice

    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;

    // 3.Check for folled I: if true, switch to next player

    if (dice !== 1) {
        // Add dice to current score
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent =
            currentScore;
    } else {
        //switch to next player
        swichPlayer();
    }
});

btnHold.addEventListener("click", function() {
    scores[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
        scores[activePlayer];

    swichPlayer();
});