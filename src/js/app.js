import Pers from "./classPers";

const cells = document.querySelectorAll(".cell");
const pers = new Pers();

document.addEventListener("DOMContentLoaded", () => {
  pers.addPers(cells);
  setInterval(() => {
    pers.movePers(cells);
  }, 3000);

  const container = document.querySelector(".container");

  const body = document.querySelector(".main");
  body.insertAdjacentHTML(
    "beforeend",
    "<div class='counter'>Всего очков: <span class='count'>0</span>/5</div>",
  );

  let counterId = document.querySelector(".count");
  let falseClick = 0;
  let clicksCount = 0;

  container.addEventListener("click", (e) => {
    e.target.classList.add("cursor");

    if (e.target.firstElementChild === pers.pers || e.target === pers.pers) {
      console.log(e.target.firstElementChild);
      pers.movePers(cells);
      clicksCount++;
      counterId.textContent = clicksCount;
      if (clicksCount === 5) {
        counterId.textContent = 0;
        setTimeout(() => {
          alert("Winner!");
          falseClick = 0;
        }, 100);
        clicksCount = 0;
      }
    } else {
      falseClick++;
      if (falseClick === 5) {
        counterId.textContent = 0;
        setTimeout(() => {
          alert("Looser!");
          falseClick = 0;
        }, 100);
        clicksCount = 0;
      }
    }
  });
});
