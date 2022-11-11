import Card from "./scripts/card";
import * as allCardFiller from "./scripts/card_filler";

const cardEle = document.getElementById("card");
new Card(cardEle);

console.log(allCardFiller.dataFetcher(allCardFiller.myHandler));
