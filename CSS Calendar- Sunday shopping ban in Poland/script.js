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

let today = new Date();
let g_currentDay = today.getDate();
let g_currentMonth = today.getMonth();
let g_currentYear = today.getFullYear();
let g_startDay = (new Date(today.getFullYear(), today.getMonth(), 1).getDay() + 6) % 7; //first day in current month

function showCalendar(currentMonth, currentYear, startDay, currentDay) {
  let calendar = document.createElement("table");
  calendar.classList.add("calendar");

  let content = document.getElementById("content");

  clearCalendarView(content);

  let calendarHeader = createHeader();
  calendar.appendChild(calendarHeader);

  let info = createInfo(currentMonth, currentYear);
  content.appendChild(info);

  let days = createDaysForMonth(monthsNames[currentMonth], daysNames[startDay], currentDay);
  calendar.appendChild(days);

  content.appendChild(calendar);
}

function clearCalendarView(content) {
 //todo: search for calendar and info on content and if exist, remove it from content (content.ChildNodes, or something else) 
 //make changes only here! :)
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

function createInfo(currentMonth, currentYear) {
  const result = document.createElement("div");
  result.textContent = (monthsNames[currentMonth]) + '  ' + currentYear;
  result.classList.add("resultMonthAndYear");
  return result;
}

function createDaysForMonth(monthName, startingDay, currentDay) {
  let tbody = document.createElement("tbody");
  let count = 1;

  let firstRow = createFirstRow(startingDay, currentDay);
  tbody.appendChild(firstRow);

  let index = daysNames.indexOf(startingDay);
  let nextMonday = 8 - index; // 7 - index + 1

  let lastMonday = createMiddleRows(tbody, nextMonday, monthName, currentDay);

  let lastRow = createLastRow(lastMonday, monthName, currentDay);
  tbody.appendChild(lastRow);

  return tbody;
}

function createFirstRow(startingDay, currentDay) {
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
    if (count === currentDay) {
      cell.classList.add("currentDay");
    }
    count++;
  }
  return row;
}

function createMiddleRows(tbody, startingDay, monthName, currentDay) {
  let monthIndex = monthsNames.indexOf(monthName);
  let daysInCurrentMonth = daysInMonth[monthIndex];
  let count = startingDay;

  while (count + 6 < daysInCurrentMonth) {
    let row = document.createElement("tr");
    for (i = 0; i < 7; i++) {
      let cell = document.createElement("td");
      cell.textContent = count;
      row.appendChild(cell);
      if (count === currentDay) {
        cell.classList.add("currentDay");
      }
      count++;
    }
    tbody.appendChild(row);
  }
  return count;
}

function createLastRow(startDay, monthName, currentDay) {
  let monthIndex = monthsNames.indexOf(monthName);
  let daysInCurrentMonth = daysInMonth[monthIndex];

  let row = document.createElement("tr");
  let count = 0;
  for (i = startDay; i <= daysInCurrentMonth; i++) {
    let cell = document.createElement("td");
    cell.textContent = i;
    row.appendChild(cell);
    if (count === currentDay) {
      cell.classList.add("currentDay");
    }
    count++;
  }
  for (i = count; i < 7; i++) {
    let cell = document.createElement("td");
    row.appendChild(cell);
  }
  return row;
}

function previous() {
  g_currentMonth--;
  if (g_currentMonth < 0) {
    g_currentMonth = 11;
    g_currentYear--;
  }
  g_startDay = (new Date(g_currentYear, g_currentMonth, 1).getDay() + 6) % 7;;
  showCalendar(g_currentMonth, g_currentYear, g_startDay);
}

function next() {
  g_currentMonth++;
  if (g_currentMonth > 11) {
    g_currentMonth = 0;
    g_currentYear++;
  }
  g_startDay = (new Date(g_currentYear, g_currentMonth, 1).getDay() + 6) % 7;
  showCalendar(g_currentMonth, g_currentYear, g_startDay);

  /*g_currentMonth++;
  let nextMonth = (g_currentMonth + 1) % 12;
  if (nextMonth === 0) {
    g_currentYear++;
  };
  g_startDay;
  showCalendar(nextMonth, g_currentYear, g_startDay)
  */
}

//*bind execution logic with buttons
//TODO: make small function so I'll avoid duplications (assign clickHandler, id of the element, reference to the handler)
let buttonPrev = document.getElementById("previous");
buttonPrev.addEventListener("click", previous);

let buttonNext = document.getElementById("next");
buttonNext.addEventListener("click", next);

showCalendar(g_currentMonth, g_currentYear, g_startDay, g_currentDay); //calling the function
