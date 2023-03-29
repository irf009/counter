const value = document.querySelector(".value");
const increase = document.querySelector(".btn-increase");
const decrease = document.querySelector(".btn-decrease");
const reset = document.querySelector(".btn-reset");
const btns = document.querySelector(".btns");

btns.addEventListener("click", function () {
  if (value.innerHTML == 0) {
    value.style.color = "#222";
  }
});
increase.addEventListener(`click`, function (e) {
  value.innerHTML++;
  if (value.innerHTML > 0) {
    value.style.color = "green";
  }
});
decrease.addEventListener(`click`, function (e) {
  value.innerHTML--;
  if (value.innerHTML < 0) {
    value.style.color = "red";
  }
});
reset.addEventListener(`click`, function (e) {
  value.innerHTML = 0;
  if (value.innerHTML == 0) {
    value.style.color = "#222";
  }
});
