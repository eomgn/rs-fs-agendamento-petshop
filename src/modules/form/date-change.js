import { load } from "../schedules/load.js";

const dateForm = document.querySelector("#date-schedule");
const dateSchedules = document.querySelector("#date");

dateForm.addEventListener("change", () => {
  dateSchedules.value = dateForm.value;

  load();
});

dateSchedules.addEventListener("change", () => {
  dateForm.value = dateSchedules.value;

  load();
});
