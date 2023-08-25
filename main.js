import "./style.css";

const day = document.querySelector(".date-day");
const date = document.querySelector(".date");
const month = document.querySelector(".date-month");
const year = document.querySelector(".date-year");

const digitalClock = document.querySelector(".digital-clock");

const arrowSecond = document.querySelector(".clock-seconds__arrow");
const arrowMinutes = document.querySelector(".clock-minutes__arrow");
const arrowHours = document.querySelector(".clock-hours__arrow");

const namesOfMonth = [
  "Січень",
  "Лютий",
  "Березень",
  "Квітень",
  "Травень",
  "Червень",
  "Липень",
  "Серпень",
  "Вересень",
  "Жовтень",
  "Листопад",
  "Грудень",
];

const arrDay = [
  "Неділя",
  "Понеділок",
  "Вівторок",
  "Середа",
  "Четвер",
  "П`ятниця",
  "Субота",
];

setInterval(() => {
  const currentTime = new Date();

  const currentMonth = namesOfMonth[currentTime.getMonth()];
  const currentDay = arrDay[currentTime.getDay()];
  const currentNumberDay = currentTime.getDate();
  const currentYear = currentTime.getFullYear();

  const currentHours = currentTime.getHours();
  const currentMinutes = currentTime.getMinutes();
  const currentSeconds = currentTime.getSeconds();

  const changeSeconds = (360 / 60) * currentSeconds;
  const changeMinutes = (360 / 60) * currentMinutes;
  const changeHours =
    (360 / 12) * currentHours + (360 / 12 / 60) * currentMinutes;

  const formatTime = `${currentHours
    .toString()
    .padStart(2, "0")}:${currentMinutes
    .toString()
    .padStart(2, "0")}:${currentSeconds.toString().padStart(2, "0")}`;

  day.textContent = currentDay;
  month.textContent = currentMonth;
  year.textContent = currentYear;
  date.textContent = currentNumberDay;
  digitalClock.textContent = formatTime;

  arrowSecond.style.transform = `rotate(${changeSeconds}deg)`;
  arrowMinutes.style.transform = `rotate(${changeMinutes}deg)`;
  arrowHours.style.transform = `rotate(${changeHours}deg)`;
}, 1000);
