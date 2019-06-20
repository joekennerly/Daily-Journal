import { entriesDOM } from "./entriesDOM.js"
import { API } from "./data.js"

// function to display previous entries to the page
API.getJournalEntries()
  .then(entries => {
    console.log(entries)
    entriesDOM.renderJournalEntries(entries)
  })

document.querySelector('#submit').addEventListener('click', event => {
  event.preventDefault()

  let newDate = document.querySelector("#journalDate").value
  let newConcepts = document.querySelector("#concepts").value
  let newEntry = document.querySelector("#entry").value
  let newMood = document.querySelector("#Mood").value

  let currentObj = API.createEntryObj(newDate, newConcepts, newEntry, newMood)
  console.log(currentObj);

  API.postEntry(currentObj)
    .then(dataJS => {
      console.log(dataJS)
      document.querySelector('.entryLog').innerHTML = ""
      API.getJournalEntries()
      .then(entries => entriesDOM.renderJournalEntries(entries))
  })
  
})