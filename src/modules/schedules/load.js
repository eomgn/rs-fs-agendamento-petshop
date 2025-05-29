import dayjs from "dayjs";
import { openHours } from "../form/hours.js";

// data na pagina inicial de agenda
const today = dayjs(new Date()).format("YYYY-MM-DD");
const dateView = document.querySelector("#date");
dateView.value = today;

// data do formulário
const dateSchedule = document.querySelector("#date-schedule");

export function load() {
  const date = dateSchedule.value;

  //   const dailySchedules = dateSchedule.value;

  openHours(date);
}
