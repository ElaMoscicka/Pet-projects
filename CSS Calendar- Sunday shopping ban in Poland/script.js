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

  let days = createDaysForMonth(monthsNames[0], daysNames[6]);
  calendar.appendChild(days);

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

function createDaysForMonth(monthName, startingDay) {
  let tbody = document.createElement("tbody");
  let count = 1;

  let firstRow = createFirstRow(startingDay);
  tbody.appendChild(firstRow);
  
  let index = daysNames.indexOf(startingDay);
  let nextMonday = 8 - index; // 7 - index + 1

  let lastMonday = createMiddleRows(tbody, nextMonday, monthName);

  let lastRow = createLastRow(lastMonday, monthName);
  tbody.appendChild(lastRow);

	return tbody;
}

function createFirstRow(startingDay) {
  let row = document.createElement("tr");
  let start = daysNames.indexOf(startingDay);
  
  for (i = 0; i < start; i++) {
    let cell = document.createElement("td");
    row.appendChild(cell);
  }
  
  let count = 1;
  for (i = start; i < 7; i++) {
    let cell = document.createElement("td");
    cell.textContent = count;
    row.appendChild(cell);
    count++;
  }
  
  return row;
}

function createMiddleRows(tbody, startingDay, monthName) {
	let monthIndex = monthsNames.indexOf(monthName);
  let daysInCurrentMonth = daysInMonth[monthIndex];
  let count = startingDay;
  
  while (count + 6 < daysInCurrentMonth) {
  	let row = document.createElement("tr");
    for (i = 0; i < 7; i++) {
      let cell = document.createElement("td");
      cell.textContent = count;
      row.appendChild(cell);
      count++;
    }
    tbody.appendChild(row);
  }
  
  return count;
}

function createLastRow(startDay, monthName) {
	let monthIndex = monthsNames.indexOf(monthName);
  let daysInCurrentMonth = daysInMonth[monthIndex];

  let row = document.createElement("tr");
  let count = 0;
  for (i = startDay; i <= daysInCurrentMonth; i++) {
    let cell = document.createElement("td");
    cell.textContent = i;
    row.appendChild(cell);
    count++;
  }
  for (i = count; i < 7; i++) {
    let cell = document.createElement("td");
    row.appendChild(cell);
  }
  
  return row;
}

function previous() {
  console.log("previous");
}

function next() {
  console.log("next");
}

//*bind execution logic with buttons
//TODO: make small function so I'll avoid duplications (assign clickHandler, id of the element, reference to the handler)
let buttonPrev = document.getElementById("previous");
buttonPrev.addEventListener("click", previous);

let buttonNext = document.getElementById("next");
buttonNext.addEventListener("click", next);

let showButton = document.getElementById("show");
showButton.addEventListener("click", showCalendar);

