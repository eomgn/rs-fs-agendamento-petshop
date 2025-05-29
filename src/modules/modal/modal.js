const openModal = document.querySelector(".open-modal");
const closeModal = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");

// Alterna a visibilidade da modal
const toggleModal = () => {
  modal.classList.toggle("hide");
};

// Abre a modal
openModal.addEventListener("click", () => {
  toggleModal();
});

// Fecha a modal pelo botão
closeModal.addEventListener("click", (e) => {
  toggleModal();
});
