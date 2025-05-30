const inputTelephone = document.querySelector("#telephone");

inputTelephone.addEventListener("keyup", () => {
  const tel = inputTelephone.value.replace(/\D/g, "");
  const telRegex = tel.replace(/^(\d{2})(\d{4,5})(\d{4})$/, "($1) $2-$3");
  return (inputTelephone.value = telRegex);
});
