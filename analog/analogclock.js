
const secondHand = document.querySelector('.analog-clock .second-hand');
const minsHand = document.querySelector('.analog-clock .min-hand');
const hourHand = document.querySelector('.analog-clock .hour-hand');

function updateAnalogTime() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}



// Function to update the clock every second
function startAnalogClock() {
    updateAnalogTime();
    setInterval(updateAnalogTime, 1000);
}