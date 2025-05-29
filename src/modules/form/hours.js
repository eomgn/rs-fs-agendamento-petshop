import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hours.js";

const select = document.querySelector("#hour-schedule");

export function openHours({ date, dailySchedules }) {
  // limpa a lista de horários
  select.innerHTML = "";

  // obtem a lista de todos os horarios ja agendados
  const unavailableHours = dailySchedules.map((schedule) =>
    dayjs(schedule.date).format("HH:mm")
  );

  // capturando as horas possiveis de agendamento
  const openHours = openingHours.map((hour) => {
    const [scheduleHour] = hour.split(":");

    const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs()); // capturando se a hora é antes da atual

    const available = !unavailableHours.includes(hour) && !isHourPast; // verifica se já não existe a data e hora registrada

    return {
      hour, // a hora propriamente capturada do arquivo opening-rous.js
      available: available, // se estiver 'true' indica disponibilidade, se 'false' indica indisponibilidade
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
