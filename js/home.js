const checkInBtns = document.querySelectorAll(".check-in-btn");
const popUpBtn = document.querySelectorAll(".popup-btn");
const popUpContainer = document.querySelector(".pop-up-container");
const classHistoryBody = document.getElementById("class-history-body");
const beltHoursCur = document.getElementById("belt-hours-cur");

let popUpHidden = true;
let cumulativeHours = 0;

// represents the data for latest checkin btn clicked!
let target = {
  name: '',
  time: ''
};

// ================================ Functions ==========================================
// function add history item to localstorage and keeps old state
const addHistory = () => {
  const value = [
    ...(getHistory()),
    target
  ]
  localStorage.setItem('history', JSON.stringify(value));
}

// function gets history from localstorage and converts is from json string to actual array
const getHistory = () => {
  return JSON.parse(localStorage.getItem('history')) ?? [];
}

// function add historyTableRow for each item in the history array
const historyToRows = () => {
  return getHistory().map(item => historyTableRow(item)).join('');
}

// function adds 2 hours for each history item in the history array
const historyToHours = () => {
  return getHistory().reduce((acc) => acc += 2, 0);
}

const updateHistoryHTML = () => {
  classHistoryBody.innerHTML = historyTable(
    historyToRows()
  );
}

const updateHoursHTML = () => {
  beltHoursCur.innerHTML = historyToHours();
}

// function responsible of handling popup
const togglePopUp = () => {
  popUpHidden = !popUpHidden;
  popUpContainer.style.display = popUpHidden ? 'none' : 'flex';
}

// function to handle all things need to be done when checkin is accepted
const handleCheckIn = () => {
  togglePopUp();
  addHistory();
  updateHistoryHTML();
  updateHoursHTML();
};

// ================================ Event Handlers ==========================================
document.getElementById("btn-yes")
  .addEventListener("click", () => {
    handleCheckIn();
  });

document.getElementById("btn-no")
  .addEventListener("click", () => {
    togglePopUp();
  });

checkInBtns.forEach((e) => {
  e.addEventListener("click", (event) => {
    togglePopUp();
    target = {
      name: event.target.getAttribute("data-name"),
      time: event.target.getAttribute("data-time")
    }
  });
});

// ================================ Runs on Page Load ==========================================
// this is a way of doing something on page ready
(function () {
  updateHistoryHTML(); // this will populate history table if there is already history present
  updateHoursHTML(); // this will populate hours html if there is alreadt history present
})();