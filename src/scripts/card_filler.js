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
        cardFiller(book, i);
      });
    })
    .catch((error) => {
      console.error(error);
    });
};

function titleize(str) {
  const littleWords = [
    "a",
    "an",
    "and",
    "at",
    "but",
    "by",
    "for",
    "from",
    "in",
    "into",
    "of",
    "off",
    "over",
    "the",
    "to",
  ];

  let titleized = [];

  let rawWords = str.split(" ");
  let words = [];

  rawWords.map((word) => {
    words.push(word.toLowerCase());
  });

  for (let i = 0; i < words.length; i++) {
    let cappsedWord =
      words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
    if (i === 0 || !littleWords.includes(words[i])) {
      titleized.push(cappsedWord);
    } else {
      titleized.push(words[i]);
    }
  }
  return titleized.join(" ");
}

export const cardFiller = function (book, i) {
  const frontData = ["book_image", "title", "author", "rank", "weeks_on_list"];
  const backData = ["description", "buy_links[5].url", "amazon_product_url"];

  const card = document.getElementById(`card-${i + 1}`);

  // MAKING FRONT OF CARD

  let front = document.createElement("ol");
  front.setAttribute("class", "front-of-card");

  frontData.forEach((category) => {
    let li = document.createElement("li");
    li.setAttribute("class", category);
    if (category === "book_image") {
      let img = document.createElement("img");
      img.setAttribute("src", book["book_image"]);
      img.setAttribute("alt", `Cover image for ${titleize(book["title"])}`);
      li.appendChild(img);
    } else {
      if (category === "title") {
        li.textContent = titleize(book["title"]);
      } else {
        li.textContent = book[category];
      }
    }
    front.appendChild(li);
  });

  card.appendChild(front);

  // MAKING BACK OF CARD

  let back = document.createElement("ol");
  back.setAttribute("class", "back-of-card");

  backData.forEach((category) => {
    let li = document.createElement("li");
    li.setAttribute("class", category);
    if (category === "description") {
      li.textContent = book[category];
    } else {
      let a = document.createElement("a");
      if (category === "buy_links[5].url") {
        a.setAttribute("href", book.buy_links[5].url);
        a.textContent = "Purchase from an independent bookstore with IndieBound";
      } else {
        a.setAttribute("href", book[category]);
        a.textContent = "Purchase from Amazon";
      }
      li.appendChild(a);
    }
    back.appendChild(li);
  });

  card.appendChild(back);
};
