import { openHours } from "../form/hours.js";

const dateSchedule = document.querySelector("#date-schedule");

export function load() {
  const date = dateSchedule.value;

  //   const dailySchedules = dateSchedule.value;

  openHours(date);
}
