// Calclator
function calculate() {
    var result = document.getElementById("result");
    var height = parseInt(document.getElementById("height").value);
    var weight = parseInt(document.getElementById("weight").value);
    document.getElementById("weight-val").textContent = weight + " kg";
    document.getElementById("height-val").textContent = height + " cm";
    var bmi = (weight / Math.pow( (height/100), 2 )).toFixed(1);
    result.textContent = bmi;

    if(bmi < 18.5){
        category = "Underweight";
        result.style.color = "#ffc44d";
        data = "Some tips for gaining weight include: \n 1.using milk in coffee, tea or with meals \n 2.using healthy fats like olive oil or avocado in your meals \n 3.sprinkling some grated cheese on cooked food \n 4.adding milk powder to soups, stews and drinks \n 5.adding protein powder to milkshakes \n 6.replacing black tea or coffee with milky drinks \n 7.doing some light exercise to increase your appetite";
    }

    else if( bmi >= 18.5 && bmi <= 24.9 ){
        category = "Normal Weight";
        result.style.color = "#0be881";
        data = "Looks good for now";
    }

    else if( bmi >= 25 && bmi <= 29.9 ){
        category = "Overweight";
        result.style.color = "#ff884d";
        data = "Some tips for loosing weight include: \n 1.Exercise for a minium of 150 min per week. \n 2.Walk wherever possible. \n 3.Mainitain a healthy diet.";
    }

    else if (bmi <= 30) {
        category = "Obese";
        result.style.color = "#ff5e57";
        data = "Some tips for loosing weight include: \n 1.Exercise for a minium of 150 min per week. \n 2.Walk wherever possible. \n 3.Mainitain a healthy diet. \n 4.Try to consult a doctor.";
  
    }
    
    else {
        category = "Short";
        result.style.color = "#ff5e57";
        data = "Your just short";
    }

    document.getElementById("type").textContent = category;
    document.getElementById("Data").textContent = data;
}

// Timer
let seconds = 0;
let timerInterval;
const secondsHld = document.getElementById('seconds');
const minutesHld = document.getElementById('minutes');
const hourHld = document.getElementById('hours');

function startTimer() {
  if (!timerInterval) {
      timerInterval = setInterval(updateTimer, 1000);
  }
}

function stopTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function resetTimer() {
  stopTimer();
  seconds = 0;
  updateTimerDisplay();
}

function updateTimer() {
  seconds++;
  updateTimerDisplay();
}

function updateTimerDisplay() {
  const numberOfHours = Math.floor(seconds / 3600);
  const numberOfMinutes = Math.floor((seconds % 3600) / 60);
  const numberOfSeconds = seconds % 60;

  hourHld.innerText = pad(numberOfHours);
  minutesHld.innerText = pad(numberOfMinutes);
  secondsHld.innerText = pad(numberOfSeconds);
}

function pad(number) {
  return number < 10 ? "0" + number : number;
}

document.getElementById('Start').addEventListener("click", startTimer);
document.getElementById('Stop').addEventListener("click", stopTimer);
document.getElementById('Reset').addEventListener("click", resetTimer);