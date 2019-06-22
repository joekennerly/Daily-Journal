import { API } from "./data.js"
import { entriesDOM } from "./entriesDOM.js"

export const Component = {
  makeJournalEntry(journalEntry) {
    let newEntry = document.createElement("div")
    newEntry.setAttribute("class", "journalEntry")
    newEntry.setAttribute("id", `entry-${journalEntry.id}`)
    newEntry.innerHTML = `
    <h2 class="prompt">${journalEntry.title}</h2>
    <p><i>Date</i> ${journalEntry.date} <i>-&-</i> <i>Mood </i> ${journalEntry.mood}</p></br>
    <p><i>Entry</i> ${journalEntry.entry}</p></br>`
    let deleteButton = document.createElement("button")
    deleteButton.textContent = "Delete"
    deleteButton.addEventListener("click", event => {
      let id = journalEntry.id
      // let id = event.target.id
      console.log("delete btn clicked", id)
      API.deleteEntry(id)
        .then(() => {
          document.querySelector('.entryLog').innerHTML = ""
          API.getJournalEntries()
          .then(entries => {
            console.log("entries on delete", entries)
            entriesDOM.renderJournalEntries(entries)
          })
      })
    })
    newEntry.appendChild(deleteButton)
    return newEntry 
  }
}