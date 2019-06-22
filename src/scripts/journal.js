import { entriesDOM } from "./entriesDOM.js";
import { API } from "./data.js";

// function to display previous entries to the page
API.getJournalEntries().then(entries => {
  console.log("entries on load", entries);
  entriesDOM.renderJournalEntries(entries);
});

document.querySelector("#submit").addEventListener("click", () => {

  // factory function helper
  function createEntryObj(date, title, entry, mood) {
    return {
      date: date,
      title: title,
      entry: entry,
      mood: mood
    };
  }

  let currentObj = createEntryObj(
    document.querySelector("#journalDate").value,
    document.querySelector("#concepts").value,
    document.querySelector("#entry").value,
    document.querySelector("#Mood").value
  );

  API.postEntry(currentObj)
});
