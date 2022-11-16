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
  const frontData = ["book_image", "title", "author"];
  const frontSubData = ["rank", "weeks_on_list"];
  const backData = ["description", "buy_links[5].url", "amazon_product_url"];

  const card = document.getElementById(`card-${i + 1}`);

  // MAKING FRONT OF CARD

  let front = document.createElement("ul");
  front.setAttribute("class", "front-of-card");

  let firstFrontSubDiv = document.createElement("div");
  firstFrontSubDiv.setAttribute("class", "top-front-div");

  frontData.forEach((category) => {
    if (category === "book_image") {
      let li = document.createElement("li");
      li.setAttribute("class", "book_image");
      let img = document.createElement("img");
      img.setAttribute("src", book["book_image"]);
      img.setAttribute("alt", `Cover image for ${titleize(book["title"])}`);
      li.appendChild(img);
      firstFrontSubDiv.appendChild(li);
      front.appendChild(firstFrontSubDiv);
    } else if (category === "title") {
      let li = document.createElement("li");
      li.setAttribute("class", "title");
      li.textContent = titleize(book["title"]);
      firstFrontSubDiv.appendChild(li);
      front.appendChild(firstFrontSubDiv);
    } else if (category === "author") {
      let li = document.createElement("li");
      li.setAttribute("class", "author");
      li.textContent = book.author;
      firstFrontSubDiv.appendChild(li);
      front.appendChild(firstFrontSubDiv);
    }
  });

  let frontSubDiv = document.createElement("div");
  frontSubDiv.setAttribute("class", "rank-week-div");

  frontSubData.forEach((category) => {
    if (category === "rank") {
      let rankLi = document.createElement("li");
      rankLi.setAttribute("class", "rank");
      rankLi.textContent = "# " + book[category];
      let rankP = document.createElement("p");
      rankP.innerHTML = "Rank";
      front.appendChild(frontSubDiv);
      frontSubDiv.appendChild(rankLi);
      rankLi.appendChild(rankP);
      if (book["weeks_on_list"] === 0) {
        frontSubDiv.style.display = "block";
        rankLi.style.paddingLeft = "0px";
      }
    } else if (category === "weeks_on_list") {
      if (book["weeks_on_list"] >= 1) {
        let weeksLi = document.createElement("li");
        weeksLi.setAttribute("class", "weeks_on_list");
        weeksLi.textContent = book[category];
        let weeksP = document.createElement("p");
        if (book["weeks_on_list"] === 1) {
          weeksP.innerHTML = "Week on list";
        } else {
          weeksP.innerHTML = "Weeks on list";
        }
        front.appendChild(frontSubDiv);
        frontSubDiv.append(weeksLi);
        weeksLi.appendChild(weeksP);
      }
    }
  });

  card.appendChild(front);

  // MAKING BACK OF CARD

  let back = document.createElement("ul");
  back.setAttribute("class", "back-of-card");

  let backSubDiv = document.createElement("div");
  backSubDiv.setAttribute("class", "back-buttons-div");

  backData.forEach((category) => {
    // console.log(book[category]);
    let li = document.createElement("li");
    // li.setAttribute("class", category);
    if (category === "description") {
      if (book["description"] === "") {
        li.setAttribute("class", category);
        li.textContent =
          "No description available for this one... Feel free to judge this book by its cover 😉";
        back.appendChild(li);
      } else {
        li.setAttribute("class", category);
        li.textContent = book[category];
        back.appendChild(li);
      }
    } else {
      let a = document.createElement("a");
      let button = document.createElement("button");
      if (category === "buy_links[5].url") {
        li.setAttribute("class", "indie_bound_link");
        a.setAttribute("href", book.buy_links[5].url);
        button.textContent =
          "Purchase from an independent bookstore with IndieBound";
      } else {
        li.setAttribute("class", category);
        a.setAttribute("href", book[category]);
        button.textContent = "...Or purchase from Amazon";
      }

      backSubDiv.appendChild(li);
      li.appendChild(a);
      a.appendChild(button);

      button.addEventListener("click", (e) => e.stopPropagation());
    }
    back.appendChild(backSubDiv);
  });

  card.appendChild(back);
};
