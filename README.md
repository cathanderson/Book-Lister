## Book Lister

### **Background** 🏞

***Book Lister*** serves as a data visualization for The New York Times’ best sellers book list using the NYT Books API. Users can filter the books they’re shown by list and date, and each book is depicted as a flippable card with relevant book data.


### **Functionality & MVPs** 🏋🏼‍♀️

In ***Book Lister***, users can:

1. Filter the books they’re shown by list (hardcover fiction, paperback nonfiction, etc.)
2. Filter the books they’re shown by date (since new best seller lists come out weekly/monthly)
3. View the following data on best selling books:
   - _Cover image_
   - _Title_
   - _Author_
   - _Rank on their respective list_
   - _Number of weeks on their list_
   - _Description_
   - _Link to purchase the book from an independent bookstore with Indiebound_
   - _Link to purchase the book from Amazon_


### **Wireframe** 🖼

![Wireframe image](./assets/wireframe.png)

### **...Vs. Reality** 🖥

![Example live screenshot 1](./assets/bl-live-screengrab.png)
_Paperback Nonfiction List Example_
<br><br>
![Example live screenshot 2](./assets/bl-live-screengrab-2.png)
_Business Books List Example_

Above a 3x5 grid of books (each NYT best seller list includes 15 titles!) are the page’s main heading and a subheading indicating which dynamically updates as the site displays different list types. The site defaults to the NYT’s default list- _Combined Print & E-Book Fiction_.

In the live screenshots, the pink cards reflect a card's/book's default (“up”) position, displaying the relevant cover image, title, author, list rank, and the number of weeks on the list. If the database indicates that a book has been on the list for 0 weeks (either due to faulty data or the book living on a monthly list), its card's styling dynamically updates to not include weeks on list data and centers the book's rank data on the bottom of the card (seen in the Business Books List Example screengrab). The inner HTML for weeks on list data also dynamically changes to be plural or singular if a book has been on a list for more than one week or not.

Also in the live screenshots, the top right cards depict a card's flipped (”down”) position, displaying its description and buttons that will send the user to purchasing links. As shown in the Business Books List Example, if the database is missing the description of a book, a default description will be used instead.

The right side panel consists of a couple of sections including instructions and a form containing a dropdown menu to select a list and a date picker that allows the user to view historical best seller list data.


### **Technologies, Libraries, APIs** 👩🏼‍💻

This project will be implemented with the following technologies:

- Vanilla Javascript, AJAX, HTML, and CSS ✨
- NYT Books API to access/display book data 📚
- Webpack and Babel to bundle and transpile the source JavaScript code 🚀
- npm to manage project dependencies 👀

### **Code Highlights** ⚡️

A dataFetcher function is called immediately upon first render fo the app. This function calls the NYT Books API and creates the appropriate book cards based on the response from the API. 

```js 
export const dataFetcher = async function (date, list) {
  if (!date) date = "current";
  if (!list) list = "combined-print-and-e-book-fiction";
  const url = `https://api.nytimes.com/svc/books/v3/lists/${date}/${list}.json?api-key=P8pcb2dgnGF9YiOs6vGO2ATSlJvDl78Z`;
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Networking issue :/");
      }
      return response.json();
    })
    .then((data) => {
      //RESETTING LIST TITLE HEADER
      const listTitle = document.getElementById("list-title");
      listTitle.textContent = `${data.results.list_name} Best Sellers`;

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
   ...

    .catch((error) => {
      console.error(error);
    });
};
```

A cardFiller function is what ends up actually filling the cards with relevant book data. This function iterates through the appropriate fields of the API's response an manipulates the DOM to create the beautiful cards you see within the app. 

For example, here's the part of the cardFiller function that creates the HTML elements that display each book's list rank and number of weeks on its list. 

```js 
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
```

