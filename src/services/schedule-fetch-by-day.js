import dayjs from "dayjs";
import { apiConfig } from "./api-config.js";

export async function scheduleByDay(date) {
  try {
    const response = await fetch(`${apiConfig.apiUrl}/schedules`, {
      method: "GET",
    });

    const data = await response.json();

    const dailySchedules = data.filter((schedule) =>
      dayjs(date).isSame(schedule.date, "day")
    );

    // console.log(dailySchedules);
    return dailySchedules;
  } catch (error) {
    console.log(error);
    alert("Não foi possível buscar os agendamentos do dia selecionado.");
  }
}
