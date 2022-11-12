import * as allDataFetcher from "./scripts/data_fetcher";
// import * as allCardFiller from "./scripts/card_filler";

allDataFetcher.dataFetcher();

const cardHolder = document.getElementById("card-holder")

cardHolder.addEventListener('click', e => {
    if (e.target.classList.contains('card')) {
        target.toggle("flipCard");
    }
})