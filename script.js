'use strict';

let secretNumber = Math.ceil(Math.random() * 20);
let score = 20;
let highScore = 0

console.log(secretNumber);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  const reduceScore = function () {
    document.querySelector('.score').textContent = --score;
  };

  const checkScore = function (text) { 
    
      
    if (score > 1) { 
      document.querySelector('.message').textContent = `📈 ${text}`;
       reduceScore();
       console.log(score);  
    } else {
      document.querySelector('.message').textContent = '💥 Game over';
      document.querySelector('.score').textContent = 0;
    }
  };

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    console.log(score);
    if(highScore < score){
        console.log("coming");
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess > secretNumber) {
    checkScore('Too High');
  } else if (guess < secretNumber) {
    checkScore('Too Low');
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.ceil(Math.random() * 20);
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
});
