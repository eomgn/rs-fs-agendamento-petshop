import { apiConfig } from "./api-config.js";

export async function scheduleDelete(id) {
  try {
    await fetch(`${apiConfig.apiUrl}/schedules/${id}`, {
      method: "DELETE",
    });

    alert("Agendamento excluído com sucesso!");
  } catch (error) {
    console.log(error);
    alert("Não foi possível excluir o agendamento!");
  }
}
