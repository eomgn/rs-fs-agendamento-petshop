// import dayjs
import dayjs from "dayjs";

const form = document.querySelector("form");
const dateSchedule = document.querySelector("#date-schedule");

// data minima e data atual
const today = dayjs(new Date()).format("YYYY-MM-DD");
dateSchedule.value = today;
dateSchedule.min = today;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  console.log("form enviado.");
});
