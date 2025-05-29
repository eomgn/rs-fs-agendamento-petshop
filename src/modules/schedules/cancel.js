import { scheduleDelete } from "../../services/schedule-cancel.js";
import { load } from "./load.js";

document.addEventListener("click", async (event) => {
  const item = event.target.closest(".remove");

  if (item) {
    const li = item.closest("li");
    const { id } = li?.dataset;

    if (id) {
      const isConfirm = confirm(
        "Tem certeza que deseja cancelar o agendamento?"
      );
      if (isConfirm) {
        await scheduleDelete(id);
        load();
      }
    }
  }
});
