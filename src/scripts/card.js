// all JS code goes in an indiviual file in this script folder

class Card {
  constructor() {
    const card = document.createElement("div");
    card.setAttribute("class", "card");

    // const front = document.createElement("ol");
    // front.setAttribute("id", "front-of-card");

    // const back = document.createElement("ol");
    // back.setAttribute("id", "back-of-card");

    const cardHolder = document.getElementById("card-holder");

    cardHolder.appendChild(card);

    // card.appendChild(front);
    // card.appendChild(back);
  }
}

export default Card;
