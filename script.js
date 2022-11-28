'use strict';
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const btn4 = document.querySelector('.btn4');

const knock = document.getElementById('knock');
const message = document.querySelector('.message');

const openKnock = function() {
    knock.classList.toggle('hidden');
}

const openMessage= function() {
    message.classList.toggle('hidden');
    document.getElementById("h2").innerHTML = getRandomPeople();
}


btn1.addEventListener('click', openKnock )
btn2.addEventListener('click', openMessage)

const randomPeople = ['Chuck Norris','Bond,James Bond','Cristiano Siuuuuu','Obama,Barack','David Hasselhoff','Hasbulla']
const randomNumber = Math.floor(Math.random() * (randomPeople.length)) ;
const getRandomPeople = () => randomPeople[randomNumber];

console.log(randomNumber);

document.getElementById("h2").innerHTML = getRandomPeople();