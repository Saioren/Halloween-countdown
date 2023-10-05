const countdownEl = document.getElementById('countdown');
const dayContainer = document.getElementById('days');
const hourContainer = document.getElementById('hours');
const minuteContainer = document.getElementById('minutes');
const secondContainer = document.getElementById('seconds');

let countdownDate = new Date('October 31 2023');

let x = setInterval(function () {
  const now = new Date().getTime();

  let distance = countdownDate - now;

  let seconds = Math.floor((distance / 1000) % 60);
  let minutes = Math.floor((distance / 1000 / 60) % 60);
  let hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    dayContainer.innerHTML = `${days}`;
    hourContainer.innerHTML = `${hours}`;
    minuteContainer.innerHTML = `${minutes}`;
    secondContainer.innerHTML = `${seconds}`;

  if (distance < 0) {
    clearInterval(x);
    countdownEl.innerHTML = 'Halloween Day';
  }
 
}, 1000);
