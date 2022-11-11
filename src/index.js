import Card from "./scripts/card";

document.addEventListener("DOMContentLoaded", () => {
  const cardEle = document.getElementById("card");
  //grabbing ele with id of main then passing it into example class
  new Card(cardEle);
});
