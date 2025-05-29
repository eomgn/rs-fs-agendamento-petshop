const periods = document.querySelectorAll(".schedule-period__item");

periods.forEach((period) => {
  console.log(period);
  period.addEventListener("click", (e) => {
    console.log(e);
  });
});
