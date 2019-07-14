console.log("main")
import { entriesDOM } from "./entriesDOM.js";
import { API } from "./data.js";
import {act} from "./act.js"

// Display previous entries at welcome
API.getJournalEntries().then(entries => {
  entriesDOM.renderJournalEntries(entries);
});

//Load ability to post entry from form
act.postNewEntry()

//Load the filter by mood
act.filterButtons()
