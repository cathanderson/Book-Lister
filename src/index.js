import * as allDataFetcher from "./scripts/data_fetcher";
import * as allCardFiller from "./scripts/card_filler";
import * as allSidebarHelper from "./scripts/sidebar_helper"

allSidebarHelper.dropdownMaker();
allSidebarHelper.defaultDateSetter();
allDataFetcher.dataFetcher();

