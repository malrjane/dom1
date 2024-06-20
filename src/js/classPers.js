import getRandomIntInclusive from "./funcRandom";

export default class Pers {
  constructor() {
    this.pers = document.createElement("img");
    this.pers.setAttribute("src", "./images/goblin.png");
    this.pers.classList.add("goblin");
  }

  addPers(cells) {
    let randomCell = cells[getRandomIntInclusive(0, cells.length - 1)]
    randomCell.appendChild(this.pers);
  }
  movePers(cells) {
    const curCell = cells[getRandomIntInclusive(0, cells.length - 1)];
    console.log(curCell)
    if (curCell.firstElementChild === this.pers) {
      this.movePers(cells);
    } else {
      curCell.appendChild(this.pers);
    }
  }
}
