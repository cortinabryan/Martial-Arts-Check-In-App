const checkInBtn = document.querySelector(".check-in-btn");
const checkInBtns = document.querySelectorAll(".check-in-btn");
const tableRows = document.querySelectorAll(".table-row");

const tableRow = document.querySelectorAll(".table-row");

document.addEventListener("mouseover", function checkHover() {
  if (tableRow.matches(":hover")) {
    checkInBtn.style.display = "unset";
  } else {
    checkInBtn.style.display = "none";
  }
});

// if tr === hover { checkInBtn === display none}

// if (tableRow.matches(":hover")) {
//   checkInBtn.style.display = "unset";
// } else {
//   checkInBtn.style.dispaly = "none";
// }

// console.log(hovered ? "hovered" : "not hovered");
// checkHover.hovered = hovered;

// const isHover = (e) => e.parentElement.querySelector(":hover") === e;
// document.addEventListener("mouseover", function checkHover() {
//   const hovered = isHover(tableRow);
//   if (hovered !== checkHover.hovered) {
//     checkInBtn.style.display = "unset";
//   } else {
//     checkInBtn.style.display = "none";
//   }
// });
