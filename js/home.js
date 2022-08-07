const checkInBtns = document.querySelectorAll(".check-in-btn");
const popUpBtn = document.querySelectorAll(".popup-btn");
const popUpContainer = document.querySelector(".pop-up-container");
const classHistoryBody = document.getElementById("class-history-body");
const beltHoursCur = document.getElementById("belt-hours-cur");
// const deleteBtn = documnet.querySelector(".delete-btn");

let popUpHidden = true;
let cumulativeHours = 0;

// represents the data for latest checkin btn clicked!
let target = {
  name: "",
  time: "",
};

const deleteClick = (event) => {
  const index = event.target.getAttribute("data-index");
  const history = getHistory();
  history.splice(index, 1);
  localStorage.setItem("history", JSON.stringify(history));
  updateHistoryHTML();
  updateHoursHTML();
  addEventListenerToDeleteBtns();
};

const addEventListenerToDeleteBtns = () => {
  const deleteBtns = document.querySelectorAll(".delete-btn");
  deleteBtns.forEach((e) => {
    e.addEventListener("click", deleteClick);
  });
};

// ================================ Functions ==========================================
// function add history item to localstorage and keeps old state
const addHistory = () => {
  const value = [...getHistory(), target];
  localStorage.setItem("history", JSON.stringify(value));
};

// function gets history from localstorage and converts is from json string to actual array
const getHistory = () => {
  return JSON.parse(localStorage.getItem("history")) ?? [];
};

// function add historyTableRow for each item in the history array
const historyToRows = () => {
  return getHistory()
    .map((item, index) => historyTableRow(item, index))
    .join("");
};

// function adds 2 hours for each history item in the history array
const historyToHours = () => {
  return getHistory().reduce((acc) => (acc += 2), 0);
};

const updateHistoryHTML = () => {
  classHistoryBody.innerHTML = historyTable(historyToRows());
};

const updateHoursHTML = () => {
  beltHoursCur.innerHTML = historyToHours();
};

// function responsible of handling popup
const togglePopUp = () => {
  popUpHidden = !popUpHidden;
  popUpContainer.style.display = popUpHidden ? "none" : "flex";
};

// function to handle all things need to be done when checkin is accepted
const handleCheckIn = () => {
  togglePopUp();
  addHistory();
  updateHistoryHTML();
  updateHoursHTML();
  addEventListenerToDeleteBtns();
};

// ================================ Event Handlers ==========================================
document.getElementById("btn-yes").addEventListener("click", () => {
  handleCheckIn();
});

document.getElementById("btn-no").addEventListener("click", () => {
  togglePopUp();
});

checkInBtns.forEach((e) => {
  e.addEventListener("click", (event) => {
    togglePopUp();
    target = {
      name: event.target.getAttribute("data-name"),
      time: event.target.getAttribute("data-time"),
    };
  });
});

// ================================ Runs on Page Load ==========================================
// this is a way of doing something on page ready
(function () {
  updateHistoryHTML(); // this will populate history table if there is already history present
  updateHoursHTML(); // this will populate hours html if there is alreadt history present
  addEventListenerToDeleteBtns();
})();

////////////////////// TEST /////////////////////////////////////

// delete button on click
// delete selected table row
