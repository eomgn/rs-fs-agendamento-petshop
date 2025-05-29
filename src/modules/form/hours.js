import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hours.js";

const select = document.querySelector("#hour-schedule");

export function openHours(date) {
  // obtem a lista de todos os horarios ja agendados
  // const unavailableHours = dailySchedules.map((schedule) =>
  //   dayjs(schedule.when).format("HH:mm")
  // );

  // capturando as horas possiveis de agendamento
  const openHours = openingHours.map((hour) => {
    const [scheduleHour] = hour.split(":");

    const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs()); // capturando se a hora é depois da atual

    return {
      hour, // a hora propriamente capturada do arquivo opening-rous.js
      available: !isHourPast, // se estiver 'true' indica disponibilidade, se 'false' indica indisponibilidade
    };
  });

  // carregando as horas do dia atual de acordo com a disponibilidade
  openHours.forEach(({ hour, available }) => {
    const option = document.createElement("option");

    if (!available) {
      option.setAttribute("disabled", true);
      option.textContent = `${hour} (indisponível)`;
    } else {
      option.textContent = hour;
    }

    select.append(option);
  });
}
