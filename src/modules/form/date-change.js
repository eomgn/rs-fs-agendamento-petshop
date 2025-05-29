import { load } from "../schedules/load.js";

const dateSchedules = document.querySelector("#date");

dateSchedules.addEventListener("change", () => {
  load();
});
