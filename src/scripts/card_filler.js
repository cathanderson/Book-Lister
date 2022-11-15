// import * as allDataFetcher from "./data_fetcher";

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

  let front = document.createElement("ul");
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
      } else if (category === "rank") {
        let rankP = document.createElement("p");
        rankP.innerHTML = "Rank";
        li.textContent = "# " + book[category];
        // li.textContent = book[category];
        li.appendChild(rankP);
      } else if (category === "weeks_on_list") {
        let weeksP = document.createElement("p");
        if (book["weeks_on_list"] === 1) {
          weeksP.innerHTML = "Week on list";
        } else {
          weeksP.innerHTML = "Weeks on list";
        }
        li.textContent = book[category];
        li.appendChild(weeksP);
      } else {
        li.textContent = book[category];
      }
    }
    front.appendChild(li);
  });

  card.appendChild(front);

  // MAKING BACK OF CARD

  let back = document.createElement("ul");
  back.setAttribute("class", "back-of-card");

  backData.forEach((category) => {
    let li = document.createElement("li");
    li.setAttribute("class", category);
    if (category === "description") {
      li.textContent = book[category];
    } else {
      let a = document.createElement("a");
      let button = document.createElement("button");
      if (category === "buy_links[5].url") {
        a.setAttribute("href", book.buy_links[5].url);
        button.textContent =
          "Purchase from an independent bookstore with IndieBound";
      } else {
        a.setAttribute("href", book[category]);
        button.textContent = "...Or purchase from Amazon :/";
      }
      a.appendChild(button);
      li.appendChild(a);
    }
    back.appendChild(li);
  });

  card.appendChild(back);
};
