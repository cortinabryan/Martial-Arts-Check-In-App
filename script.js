const checkInBtns = document.querySelectorAll(".schedule-action-checkin");
const popUpBtn = document.querySelectorAll(".popup-btn");
const popUpContainer = document.querySelector(".popup-container");
const classHistoryBody = document.getElementById("history-body");
const beltHoursCur = document.getElementById("belt-hours-cur");

let popUpHidden = true;
let currentRows = ``;
let cumulativeHours = 0;

// represents the data for latest checkin btn clicked!
let target = {
  name: '',
  time: ''
};


// ================================ Functions ==========================================
// function to add a row to currentRows and returns new currentRows
const addRow = (row) => {
  currentRows += row;
  return currentRows;
};

// function to add hours to cumulativeHours and returns new cumulativeHours
const addHours = (amount) => {
  return cumulativeHours += amount;
};

// function responsible of handling popup
const togglePopUp = () => {
  popUpHidden = !popUpHidden;
  popUpContainer.style.display = popUpHidden ? 'none': 'flex';
}

// function to handle all things need to be done when checkin is accepted
const handleCheckIn = () => {
  togglePopUp();
  classHistoryBody.innerHTML = historyTable(
    addRow(
      historyTableRow(target)
    )
  );
  beltHoursCur.innerHTML = addHours(2);
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