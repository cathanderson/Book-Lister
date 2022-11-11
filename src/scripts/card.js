// all JS code goes in an indiviual file in this script folder

let cardHolder = document.getElementById("card-holder");

class Card {
  constructor(ele) {
    this.ele = ele;
    this.ele.innerHTML = "<h1>This will be a card</h1>";

    this.ele.addEventListener("click", this.handleClick.bind(this));
  }

  handleClick() {
    this.ele.children[0].innerText = "You flipped me!";
  }
}

export default Card;