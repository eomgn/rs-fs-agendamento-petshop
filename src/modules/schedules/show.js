import dayjs from "dayjs";

const periodMorning = document.querySelector("#period-morning");
const periodAfternoon = document.querySelector("#period-afternoon");
const periodNight = document.querySelector("#period-night");

export function scheduleShow({ dailySchedules }) {
  try {
    // limpa as listas
    periodMorning.innerHTML = "";
    periodAfternoon.innerHTML = "";
    periodNight.innerHTML = "";

    dailySchedules.forEach((schedule) => {
      const li = document.createElement("li");
      const hour = document.createElement("strong");
      const namePet = document.createElement("span");
      const nameOwner = document.createElement("span");
      const description = document.createElement("p");
      const remove = document.createElement("a");

      // adicionar o id do agendamento
      li.setAttribute("data-id", schedule.id);
      li.classList.add("schedule-period__item");

      // hour
      hour.classList.add("hour");
      hour.textContent = dayjs(schedule.date).format("HH:mm");

      // name pet
      namePet.classList.add("name-pet");
      namePet.textContent = schedule.pet;

      // name owner
      nameOwner.classList.add("name-owner");
      nameOwner.textContent = `  /  ${schedule.owner}`;

      // description
      description.classList.add("description");
      description.textContent = schedule.description;

      // remove
      remove.classList.add("remove");
      remove.textContent = "Remover agendamento";

      li.append(hour, namePet, nameOwner, description, remove);

      if (schedule.hour <= 12) {
        periodMorning.appendChild(li);
      } else if (schedule.hour > 12 && schedule.hour <= 18) {
        periodAfternoon.appendChild(li);
      } else {
        periodNight.appendChild(li);
      }
    });
  } catch (error) {
    console.log(error);
    alert("Não foi possível exibir os agendamentos.");
  }
}
