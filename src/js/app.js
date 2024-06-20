import Pers from "./classPers";

const cells = document.querySelectorAll('.cell');
const pers = new Pers();


document.addEventListener("DOMContentLoaded", () => {
  pers.addPers(cells);
  setInterval(() => {
    pers.movePers(cells);
  }, 1000);
});