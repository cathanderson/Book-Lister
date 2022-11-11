// all JS code goes in an indiviual file in this script folder

class Card {
  constructor(ele) {
    this.ele = ele;

    const front = document.createElement("div");
    front.setAttribute("id", "front-of-card");

    const back = document.createElement("div");
    back.setAttribute("id", "back-of-card");

    ele.appendChild(front);
    ele.appendChild(back);
  }
}

export default Card;
