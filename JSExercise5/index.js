// Variables Timer

let minutesDisplay = document.querySelector('.minutes');
let secondsDisplay = document.querySelector('.seconds');
let timerTimeOut


// Variables Controls

const play = document.querySelector('.play');
const stop = document.querySelector('.stop');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');

// Variables Musics

const florest = document.querySelector('.florest');
const rain = document.querySelector('.rain');
const coffeeShop = document.querySelector('.coffeeShop');
const fireplace = document.querySelector('.fireplace');

// Variables Audios

const audioFlorest = new Audio('./musics/Floresta.wav')
const audioRain = new Audio('./musics/Chuva.wav')
const audioCoffeShop = new Audio('./musics/Cafeteria.wav')
const audioFireplace = new Audio('./musics/Lareira.wav')
const endTimerAudio = new Audio ('./musics/audios_button-press.wav')

// Variables Mode

const sun = document.querySelector('.sun')
const moon = document.querySelector('.moon')
const background = document.querySelector('.background')
const buttonPlay = document.querySelector('.buttonPlay')
const buttonStop = document.querySelector('.buttonStop')
const buttonPlus = document.querySelector('.buttonPlus')
const buttonMinus = document.querySelector('.buttonMinus')
const outsideFlorest = document.querySelector('#outsideFlorest');
const outsideRain = document.querySelector('#outsideRain');
const outsideCoffeeShop = document.querySelector('#outsideCoffeeShop');
const outsideFireplace = document.querySelector('#outsideFireplace');
const insideFlorest = document.querySelector('#insideFlorest');
const insideRain = document.querySelector('#insideRain');
const insideCoffeeShop = document.querySelector('#insideCoffeeShop');
const insideFireplace = document.querySelector('#insideFireplace');

// Code

let minutes = Number(minutesDisplay.textContent);
let seconds = Number(secondsDisplay.textContent);

play.addEventListener('click', timerPlay);
stop.addEventListener('click', timerStop);
plus.addEventListener('click', timerPlus);
minus.addEventListener('click', timerMinus);

function timerPlay(){
  timerTimeOut = setTimeout(() => {
    
    if(seconds <= 0) {
      seconds = 59
      --minutes
    } else {
      --seconds;
    }

    if (minutes <= 0){
      minutes = 25
      endTimerAudio.play()
    }
  
    console.log(minutes);
    console.log(seconds);
  
    minutesDisplay.textContent = String(minutes).padStart(2, "0");
    secondsDisplay.textContent = String(seconds).padStart(2, "0");

    timerPlay();
  }, 1000)
}

function timerStop() {
  clearTimeout(timerTimeOut);  
}

function timerPlus() {
  minutes = minutes + 5;
}

function timerMinus() {
  minutes = minutes - 5;
}

// Code Mode

sun.addEventListener('click', changeModeDark);
moon.addEventListener('click', changeModeLight);

function changeModeDark(){
  sun.classList.remove('on');
  sun.classList.add('off');
  moon.classList.remove('off');
  moon.classList.add('on');
  background.classList.remove('light');
  background.classList.add('dark');
  buttonPlay.classList.add('off');
  buttonStop.classList.add('off');
  buttonPlus.classList.add('off');
  buttonMinus.classList.add('off');
  outsideFlorest.classList.add('outsideOff')
  outsideRain.classList.add('outsideOff')
  outsideCoffeeShop.classList.add('outsideOff')
  outsideFireplace.classList.add('outsideOff')
  insideFlorest.classList.add('insideOff')
  insideRain.classList.add('insideOff')
  insideCoffeeShop.classList.add('insideOff')
  insideFireplace.classList.add('insideOff')
}

function changeModeLight(){
  sun.classList.add('on');
  sun.classList.remove('off');
  moon.classList.add('off');
  moon.classList.remove('on');
  background.classList.add('light');
  background.classList.remove('dark')
  buttonPlay.classList.remove('off');
  buttonStop.classList.remove('off');
  buttonPlus.classList.remove('off');
  buttonMinus.classList.remove('off');
  outsideFlorest.classList.remove('outsideOff')
  outsideRain.classList.remove('outsideOff')
  outsideCoffeeShop.classList.remove('outsideOff')
  outsideFireplace.classList.remove('outsideOff')
  insideFlorest.classList.remove('insideOff')
  insideRain.classList.remove('insideOff')
  insideCoffeeShop.classList.remove('insideOff')
  insideFireplace.classList.remove('insideOff')
}


// Code Musics

florest.addEventListener('click', function () {
  florest.classList.add('chosen');
  rain.classList.remove('chosen');
  coffeeShop.classList.remove('chosen');
  fireplace.classList.remove('chosen');
  audioFlorest.play();
  audioRain.pause();
  audioCoffeShop.pause();
  audioFireplace.pause();
  audioFlorest.loop = true;
})

rain.addEventListener('click', function () {
  florest.classList.remove('chosen');
  rain.classList.add('chosen');
  coffeeShop.classList.remove('chosen');
  fireplace.classList.remove('chosen');
  audioFlorest.pause();
  audioRain.play();
  audioCoffeShop.pause();
  audioFireplace.pause();
  audioRain.loop = true;
})

coffeeShop.addEventListener('click', function () {
  florest.classList.remove('chosen');
  rain.classList.remove('chosen');
  coffeeShop.classList.add('chosen');
  fireplace.classList.remove('chosen');
  audioFlorest.pause();
  audioRain.pause();
  audioCoffeShop.play();
  audioFireplace.pause();
  audioCoffeShop.loop = true;
})

fireplace.addEventListener('click', function () {
  florest.classList.remove('chosen');
  rain.classList.remove('chosen');
  coffeeShop.classList.remove('chosen');
  fireplace.classList.add('chosen');
  audioFlorest.pause();
  audioRain.pause();
  audioCoffeShop.pause();
  audioFireplace.play();
  audioFireplace.loop = true;
})

