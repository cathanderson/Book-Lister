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

  frontData.forEach((category) => {
    if (category === "book_image") {
      let li = document.createElement("li");
      li.setAttribute("class", "book_image");
      let img = document.createElement("img");
      img.setAttribute("src", book["book_image"]);
      img.setAttribute("alt", `Cover image for ${titleize(book["title"])}`);
      li.appendChild(img);
      front.appendChild(li);
    } else if (category === "title") {
      let li = document.createElement("li");
      li.setAttribute("class", "title");
      li.textContent = titleize(book["title"]);
      front.appendChild(li);
    } else if (category === "author") {
      let li = document.createElement("li");
      li.setAttribute("class", "author");
      li.textContent = (book.author);
      front.appendChild(li);
    } 
    // else {
    //   if (category === "rank") {
    //     let li = document.createElement("li");
    //     li.setAttribute("class", "rank-week");

    //     let rankDiv = document.createElement("div");
    //     rankDiv.textContent = "# " + book[category];

    //     let rankP = document.createElement("p");
    //     rankP.innerHTML = "Rank";

    //     front.appendChild(li);
    //     li.appendChild(rankDiv);
    //     rankDiv.appendChild(rankP);
    //   } else if (category === "weeks_on_list") {
    //     let li = document.createElement("li");
    //     li.setAttribute("class", "rank-week");
        
    //     let weeksDiv = document.createElement("div");
    //     weeksDiv.textContent = book[category];

    //     let weeksP = document.createElement("p");
    //     if (book["weeks_on_list"] === 1) {
    //       weeksP.innerHTML = "Week on list";
    //     } else {
    //       weeksP.innerHTML = "Weeks on list";
    //     }

    //     front.appendChild(li);
    //     li.append(weeksDiv);
    //     weeksDiv.appendChild(weeksP);
    //   }
    // }

    // } else if (category === "rank") {
    // let rankweekDiv = document.createElement("div")
    // li.classList.add("rank-week");
    // let rankDiv = document.createElement("div");
    // let rankP = document.createElement("p");
    // rankP.innerHTML = "Rank";
    // rankDiv.textContent = "# " + book[category];
    // li.textContent = book[category];
    // rankDiv.appendChild(rankP);
    // li.appendChild(rankDiv);
    // } else if (category === "weeks_on_list") {
    // li = document.querySelector(".rank-week");
    // let weeksDiv = document.createElement("div");
    // let weeksP = document.createElement("p");
    // if (book["weeks_on_list"] === 1) {
    //   weeksP.innerHTML = "Week on list";
    // } else {
    //   weeksP.innerHTML = "Weeks on list";
    // }
    // weeksDiv.textContent = book[category];
    // weeksDiv.appendChild(weeksP);
    // li.append(weeksDiv);
    // } else {
    //   li.textContent = book[category];
    //   }
    // }
    // front.appendChild(li);
  });
  
  let frontSubDiv = document.createElement("div");
  frontSubDiv.setAttribute("class", "rank-week-div");

  frontSubData.forEach((category) => {
    if (category === "rank") {
      // let li = document.createElement("li");
      // li.setAttribute("class", "rank-week");
      let rankLi = document.createElement("li");
      rankLi.setAttribute("class", "rank");
      rankLi.textContent = "# " + book[category];
      let rankP = document.createElement("p");
      rankP.innerHTML = "Rank";
      front.appendChild(frontSubDiv);
      frontSubDiv.appendChild(rankLi);
      rankLi.appendChild(rankP);
    } else if (category === "weeks_on_list") {
      // let li = document.createElement("li");
      // li.setAttribute("class", "rank-week");
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
  });

  card.appendChild(front);

  // MAKING BACK OF CARD

  let back = document.createElement("ul");
  back.setAttribute("class", "back-of-card");

  backData.forEach((category) => {
    let li = document.createElement("li");
    // li.setAttribute("class", category);
    if (category === "description") {
      li.setAttribute("class", category);
      li.textContent = book[category];
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
        button.textContent = "...Or purchase from Amazon :/";
      }
      a.appendChild(button);
      li.appendChild(a);
    }
    back.appendChild(li);
  });

  card.appendChild(back);
};
