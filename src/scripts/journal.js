import { entriesDOM } from "./entriesDOM.js";
import { API } from "./data.js";

// function to display previous entries to the page
API.getJournalEntries().then(entries => {
  console.log("entries on load", entries);
  entriesDOM.renderJournalEntries(entries);
});

document.querySelector("#submit").addEventListener("click", () => {
  // Save form-fields on submit button click
  let newDate = document.querySelector("#journalDate").value;
  let newConcepts = document.querySelector("#concepts").value;
  let newEntry = document.querySelector("#entry").value;
  let newMood = document.querySelector("#Mood").value;

  let currentObj = API.createEntryObj(
    newDate,
    newConcepts,
    newEntry,
    newMood
  );
  // if (newDate && newConcepts && newEntry && newMood) {
    // Save input values to an object

    // Update the database; clear dom; get updated array; display to dom
    API.postEntry(currentObj).then(dataJS => {
      console.log(dataJS);
      document.querySelector(".entryLog").innerHTML = "";
      API.getJournalEntries().then(entries =>
        entriesDOM.renderJournalEntries(entries)
      );
    });
  // }
});
