console.log("main")
import { entriesDOM } from "./entriesDOM.js";
import { API } from "./data.js";

// function to display previous entries to the page
API.getJournalEntries().then(entries => {
  entriesDOM.renderJournalEntries(entries);
});

document.querySelector("#submit").addEventListener("click", () => {
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
  
  function formCheck(object) {
    return Object.values(object).includes("")
  }

  if (formCheck(currentObj)) {
    alert("All fields must be filled out!")
  }
  else {
    API.postEntry(currentObj)
  }
  
});

let allRadioButtons = document.getElementsByName('mood')
allRadioButtons.forEach(radioButton => {
  radioButton.addEventListener("click", event => {
    const mood = event.target.value
    console.log(mood)
    API.getJournalEntries()
      .then(entries => {
      let filteredEntries = entries.filter(anEntry => anEntry.mood === mood)
      console.log(filteredEntries)
      document.querySelector(".entryLog").innerHTML = ""  
      entriesDOM.renderJournalEntries(filteredEntries)  
    });
  })
})
