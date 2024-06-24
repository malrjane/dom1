import Pers from "./classPers";

const cells = document.querySelectorAll(".cell");
const pers = new Pers();

document.addEventListener("DOMContentLoaded", () => {
  pers.addPers(cells);
  setInterval(() => {
    pers.movePers(cells);
  }, 1000);

  const container = document.querySelector(".container");

  const body = document.querySelector(".main");
  body.insertAdjacentHTML(
    "beforeend",
    "<div>Всего очков: <span class='count'>0</span>/5</div>",
  );

  let counterId = document.querySelector(".count");
  let falseClick = 0;
  let clicksCount = 0;

  container.addEventListener("click", (e) => {
    if (e.target.firstElementChild === pers.pers || e.target === pers.pers) {
      e.target.style.cursor = `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" height="32" width="32"><text y="1em" font-size="32">🪓</text></svg>'), auto`;
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
      // e.target.classList.remove("cursor");
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
    if (e.target.firstElementChild === pers.pers || e.target === pers.pers) {
      e.target.style.cursor = `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" height="32" width="32"><text y="1em" font-size="32">🪓</text></svg>'), auto`;
    }
  });
});
