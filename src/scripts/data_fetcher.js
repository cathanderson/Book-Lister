import * as allCardFiller from "./card_filler";

// NYT request root URL: https://api.nytimes.com/svc/books/v3
// NYT Books API Key: "P8pcb2dgnGF9YiOs6vGO2ATSlJvDl78Z"
// To get all lists: https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=P8pcb2dgnGF9YiOs6vGO2ATSlJvDl78Z
// the above returns 29 weekly lists and 30 monthly lists (59 total)

// below is an example call using GET /lists/{date}/{list}.json
// dates are entered YYYY-MM-DD or "current" (AS STRINGS) and list names are pulled from the list name above (also as strings)
// https://api.nytimes.com/svc/books/v3/lists/2022-08-11/hardcover-fiction.json?api-key=P8pcb2dgnGF9YiOs6vGO2ATSlJvDl78Z

// data we need:
// front of card:
// book_image
// title (need a titleize function lol)
// author
// rank
// weeks_on_list
// back of card:
// description
// buy_links[5].url (buy_links is an array of 6 vendors, choose the 5th ele for indiebound and select url from subarr )
// book_review_link -- JK- this is almost always null, so we're skipping it

export const dataFetcher = async function () {
  const url =
    "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=P8pcb2dgnGF9YiOs6vGO2ATSlJvDl78Z";
  fetch(url)
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
      }
      data.results.books.forEach((book, i) => {
        allCardFiller.cardFiller(book, i);
      });
    })
    .catch((error) => {
      console.error(error);
    });
};
