import { API } from "./data.js"
import { entriesDOM } from "./entriesDOM.js"

export const Component = {
  makeJournalEntry(journalEntry) {
    let newEntry = document.createElement("div")
    newEntry.setAttribute("class", "journalEntry")
    newEntry.setAttribute("id", `entry-${journalEntry.id}`)
    newEntry.innerHTML = `
    <h2 class="prompt">${journalEntry.title}</h2>
    <p>Date: ${journalEntry.date} |  Mood: ${journalEntry.mood}</p>
    <p>Entry: ${journalEntry.entry}</p></br>`
    let deleteButton = document.createElement("button")
    deleteButton.textContent = "Delete"
    deleteButton.addEventListener("click", (event) => {
      let id = journalEntry.id
      // let id = event.target.id
      console.log("delete btn clicked", id)
      // API.deleteEntry(id)
      //   .then(() => {
      //     API.getJournalEntries()
      //     .then(entries => {
      //       console.log("entries on delete", entries)
      //       entriesDOM.renderJournalEntries(entries)
      //     })
      // })
    })
    newEntry.appendChild(deleteButton)
    return newEntry 
  }
}