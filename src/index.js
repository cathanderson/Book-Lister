import * as allDataFetcher from "./scripts/data_fetcher";
import * as allCardFiller from "./scripts/card_filler";
import * as allSidebarHelper from "./scripts/sidebar_helper";

allSidebarHelper.dropdownMaker();
allSidebarHelper.defaultDateSetter();
allDataFetcher.dataFetcher();

const searchForm = document.getElementById("search-form");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let selectedList = e.target.elements[0].value;
  let selectedDate = e.target.elements[1].value;
  //   console.log(e.target.elements);

  fetch(
    `https://api.nytimes.com/svc/books/v3/lists/${selectedDate}/${selectedList}.json?api-key=P8pcb2dgnGF9YiOs6vGO2ATSlJvDl78Z`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Networking issue :/");
      }
      return response.json();
    })
    .then((data) => {
      for (let i = 0; i < data.results.books.length; i++) {
        // MAKING CARD
        const card = document.createElement("div");
        card.setAttribute("id", `card-${i + 1}`);
        card.setAttribute("class", "card");

        // APPENDING CARD TO MAIN SECTION
        const cardHolder = document.getElementById("card-holder");
        cardHolder.appendChild(card);

        // CARD FLIPPER
        card.addEventListener("click", (e) => {
          card.classList.toggle("is-flipped");
        });
      }
      data.results.books.forEach((book, i) => {
        allCardFiller.cardFiller(book, i);
      });
    })
    .catch((error) => {
      console.error(error);
    });
});
