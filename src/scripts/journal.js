import { entriesDOM } from "./entriesDOM.js"
import { API } from "./data.js"

// function to display previous entries to the page
API.getJournalEntries().then(entries => entriesDOM.renderJournalEntries(entries))

document.querySelector('#submit').addEventListener('click', event => {
  // Save entry values into an object
  let newEntry = {
    date: document.querySelector("#journalDate").value,
    title: document.querySelector("#concepts").value,
    entry: document.querySelector("#entry").value,
    mood: document.querySelector("#Mood").value
  }
    API.postEntry(newEntry)
  
  
})