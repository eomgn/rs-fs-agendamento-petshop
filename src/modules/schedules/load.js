import dayjs from "dayjs";
import { openHours } from "../form/hours.js";
import { scheduleShow } from "./show.js";
import { scheduleByDay } from "../../services/schedule-fetch-by-day.js";

// data na pagina inicial de agenda
const today = dayjs(new Date()).format("YYYY-MM-DD");

const dateSchedules = document.querySelector("#date");
dateSchedules.value = today;

// data do formulário
const dateForm = document.querySelector("#date-schedule");
dateForm.value = today;

export async function load() {
  const date = dateForm.value;

  const dailySchedules = await scheduleByDay(date);

  scheduleShow({ dailySchedules });

  openHours({ date, dailySchedules });
}
