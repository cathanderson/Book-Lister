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

export const dataFetcher = function (handler) {
  //   let collectedData = [];
  const url =
    "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=P8pcb2dgnGF9YiOs6vGO2ATSlJvDl78Z";
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       data.results.books.map((book) => {
  //         return book[category];
  //         // const bookData = Promise.resolve(book[category]);
  //         // Promise.resolve(bookData);
  //         // collectedData.push(bookData);
  //       });
  //     });

  // //   debugger;
  // //   return collectedData;

  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      var a = [];
      a.push(data);
      handler(a);
    });
};

export const myHandler = function (result) {
  return result;
};

export const cardFiller = function () {};
