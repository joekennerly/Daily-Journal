// console.log("main")
import { dom } from "./dom.js";
import { API } from "./data.js";
import {act} from "./act.js"

// Display previous entries at welcome
API.getJournalEntries().then(entries => {
  dom.renderJournalEntries(entries);
});

//Load ability to post entry from form
act.postNewEntry()

//Load the filter by mood
act.filterButtons()

dom.addSearchBar()
