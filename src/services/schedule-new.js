import { apiConfig } from "./api-config.js";

export function scheduleNew({ id, owner, pet, tel, description, date, hour }) {
  try {
    fetch(`${apiConfig.apiUrl}/schedules`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        owner,
        pet,
        tel,
        description,
        date,
        hour,
      }),
    });
    alert("Agendamento realizado com sucesso.");
  } catch (error) {
    console.log(error);
    alert("Não foi possivel realizar o agendamento.");
  }
}
