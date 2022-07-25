const checkInBtn = document.querySelector(".check-in-btn");

const checkInBtns = document.querySelectorAll(".check-in-btn");
// const tableRows = document.querySelectorAll(".table-row");

const tableRow = document.querySelector(".table-row");

const popUpBtn = document.querySelectorAll(".popup-btn");

const popUpContainer = document.querySelector(".pop-up-container");

// Pop up Btn

popUpBtn.forEach((e) => {
  e.addEventListener("click", () => {
    popUpContainer.style.display = "none";
  });
});

// Check in Btn

checkInBtns.forEach((e) => {
  e.addEventListener("click", () => {
    popUpContainer.style.display = "flex";
  });
});

///////////////////////////////////////////////////////////////////

/* Pre-enlightenment code */

// document.addEventListener("mouseover", () => {
//   if (tableRow.matches(":hover")) {
//     checkInBtns.forEach((e) => (e.style.display = "unset"));
//     // e.target.style.display = "unset";
//   } else {
//     checkInBtns.forEach((e) => (e.style.display = "none"));
//     // e.target.style.display = "none";
//   }
// });

// document.addEventListener("mouseover", () => {
//   if (tableRow.matches(":hover")) {
//     // checkInBtn.style.display = "unset";
//     // tableRow.style.background = "blue";
//   } else {
//     checkInBtn.style.display = "none";
//   }
// });

// If - forEach

// if (tableRow.matches(":hover")) {
//   checkInBtns.forEach((e) =>
//     e.addEventListener("mouseover", () => {
//       // checkInBtn.style.display = "unset";
//       tableRow.style.background = "blue";
//     })
//   );
// } else {
//   checkInBtn.style.display = "none";
// }

// forEach - If;
// checkInBtns.forEach((e) =>
//   e.addEventListener("mouseover", () => {
//     if (tableRow.matches(":hover")) {
//       // checkInBtn.style.display = "unset";
//       tableRow.style.background = "blue";
//       console.log("its hovering!");
//     } else {
//       // checkInBtn.style.display = "none";
//       console.log("its not hovering!");
//     }
//   })
// );

// document.addEventListener("mouseover", () => {
//   if (tableRow.matches(":hover")) {
//     // checkInBtn.style.display = "unset";
//     // tableRow.style.background = "blue";
//   } else {
//     checkInBtn.style.display = "none";
//   }
// });

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

// Copy

// const checkInBtn = document.querySelector(".check-in-btn");

// const checkInBtns = document.querySelectorAll(".check-in-btn");
// // const tableRows = document.querySelectorAll(".table-row");

// const tableRow = document.querySelector(".table-row");

// document.addEventListener("mouseover", function checkHover() {
//   if (tableRow.matches(":hover")) {
//     checkInBtn.style.display = "unset";
//   } else {
//     checkInBtn.style.display = "none";
//   }
// });
