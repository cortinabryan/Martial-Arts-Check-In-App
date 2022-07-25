const checkInBtn = document.querySelector(".check-in-btn");
const checkInBtns = document.querySelectorAll(".check-in-btn");
// const tableRows = document.querySelectorAll(".table-row");
const tableRow = document.querySelector(".table-row");
const popUpBtn = document.querySelectorAll(".popup-btn");
const popUpContainer = document.querySelector(".pop-up-container");
const classHistoryBody = document.getElementById("class-history-body");
const rows = `<tr> <td>alright</td> <td>lets gooo</td> </tr>`;
let currentRow = ``;
const classRows = {
  EarlyMorning: `<tr> <td>Early Morning</td> <td>06:15AM</td> </tr>`,
  MorningBeginner: `<tr> <td>Beginner</td> <td>09:00AM</td> </tr>`,
  MorningIntermediate: `<tr> <td>Intermediate</td> <td>10:00AM</td> </tr>`,
  Kids: `<tr> <td>Kids 4-12 years </td> <td>05:00PM</td> </tr>`,
  NightBeginner: `<tr> <td>Beginner</td> <td>06:00PM</td> </tr>`,
  NightIntermediate: `<tr> <td>Intermediate</td> <td>07:00PM</td> </tr>`,
};
let target = "";

// Pop up Btn

const pickRows = () => {
  currentRow += classRows[target];
  return currentRow;
};

popUpBtn.forEach((e) => {
  e.addEventListener("click", () => {
    popUpContainer.style.display = "none";
    classHistoryBody.innerHTML = `<tr>
		<th class="table-header">Class</th>
		<th class="table-header">Date & Time</th>
		</tr>
		${pickRows()}
		`;
  });
});

// Check in Btn

checkInBtns.forEach((e) => {
  e.addEventListener("click", (event) => {
    popUpContainer.style.display = "flex";
    console.log((target = event.target.getAttribute("data-class")));
  });
});

// Attendance history

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
