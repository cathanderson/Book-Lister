import Card from "./card";

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
// book_review_link (sometimes null- consider what to do in this case)

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
      data.results.books.forEach((book) => {
        cardFiller(book);
      });
    })
    .catch((error) => {
      console.error(error);
    });
};

export const cardFiller = function (book) {
  const frontData = ["book_image", "title", "author", "rank", "weeks_on_list"];
  const backData = ["description", "buy_links[5].url", "book_review_link"];

  let newCard = new Card();
//   debugger;

  //   for (let i = 0; i < frontData.length; i++) {
  //     let li = document.createElement("li");
  //     li.textContent = book[frontData[i]];
  //     debugger;
  //     // const front = document.getElementById("front-of-card");
  //     newCard.appendChild(li);
  //   }

  frontData.forEach((category) => {
    let li = document.createElement("li");
    li.textContent = book[category];
    // debugger;
    const front = document.getElementById("front-of-card");
    front.appendChild(li);
  });
};
