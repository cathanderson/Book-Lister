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
//   console.log(e.target.elements[0].innerText);
  allDataFetcher.dataFetcher(selectedList, selectedDate);
});
