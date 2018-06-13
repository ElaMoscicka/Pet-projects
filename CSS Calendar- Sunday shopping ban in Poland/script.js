let monthsNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let daysNames = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];

function showCalendar() {
  let calendar = document.createElement("table");
  calendar.classList.add("calendar");

  let content = document.getElementById("content");

  let calendarHeader = createHeader();
  calendar.appendChild(calendarHeader);

  let days = createDaysForMonth(monthsNames[7], daysNames[6]); 

  //let monthStartDay = monthStartDay();
  //calendar.appendChild(monthStartDay);

  content.appendChild(calendar);
}

function createHeader() {
  let thead = document.createElement("tr");
  daysNames.forEach(day => {
    let cell = document.createElement("th");
    cell.textContent = day;
    thead.appendChild(cell);
  });
  return thead;
}

function createDaysForMonth(month, startingDay) {
  let tbody = document.createElement("tbody");
  let count = 1;

  let row = document.createElement("tr");
  let start = daysNames.indexOf(startingDay);
  for (i = 0; i < start; i++) {
    let cell = document.createElement("td");
    row.appendChild(cell);
  }

  for (i = start; i < 7; i++) {
    let cell = document.createElement("td");
    cell.textContent = count;
    row.appendChild(cell);
    count++;
  }
  tbody.appendChild(row);

  let row2 = document.createElement("tr");
  for (i = 0; i < 7; i++) {
    let cell = document.createElement("td");
    cell.textContent = count;
    row2.appendChild(cell);
    count++;
  }
  tbody.appendChild(row2);

  return tbody;
}

function monthStartDay(thisYear, thisMonth) {
  let thisYear = date.getFullYear();
  let thisMonth = date.getMonth();
  let date = new Date(thisYear, thisMonth, 1);
  let startDay = date.getDay();

  if (startDay === 0) {
    startDay = 7;
  }
  return startDay;
}

function previous() {
  console.log("previous");
}

function next() {
  console.log("next");
}

//*bind execution logic with buttons
let buttonPrev = document.getElementById("previous");
buttonPrev.addEventListener("click", previous);

let buttonNext = document.getElementById("next");
buttonNext.addEventListener("click", next);

let showButton = document.getElementById("show");
showButton.addEventListener("click", showCalendar);
