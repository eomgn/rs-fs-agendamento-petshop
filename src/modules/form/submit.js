// import dayjs
import dayjs from "dayjs";
import { scheduleNew } from "../../services/schedule-new.js";
import { toggleModal } from "../modal/modal.js";
import { load } from "../schedules/load.js";

const form = document.querySelector("form");
const dateSchedule = document.querySelector("#date-schedule");
const inputOwer = document.querySelector("#owner");
const inputPet = document.querySelector("#pet");
const inputTelephone = document.querySelector("#telephone");
const inputDescription = document.querySelector("#description");
const selectHour = document.querySelector("#hour-schedule");

// data minima e data atual
const today = dayjs(new Date()).format("YYYY-MM-DD");
dateSchedule.value = today;
dateSchedule.min = today;

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  // console.log("form enviado.");

  try {
    // criando um id
    const id = new Date().getTime().toString(); // precisa definir o id como string para ser possivel acessar na API

    // garantindo que não tera espaços vazios no input owner
    const owner = inputOwer.value.trim();

    // garantindo que não tera espaços vazios no input pet
    const pet = inputPet.value.trim();

    // garantindo que não tera espaços vazios no input telefone
    const tel = inputTelephone.value.trim();

    // garantindo que não tera espaços vazios no input telefone
    const description = inputDescription.value.trim();

    // capturando a hora
    const [hour] = selectHour.value.split(":");

    // inserir a hora na data - when = 'quando'
    const date = dayjs(dateSchedule.value).add(hour, "hour");

    await scheduleNew({
      id,
      owner,
      pet,
      tel,
      description,
      date,
      hour,
    });

    // fechando o modal ao concluir o submit
    toggleModal();

    // carregando novamente os agendametnso
    await load();
  } catch (error) {
    alert("Não foi possível realizar o agendamento.");
    console.log(error);
  }
});
