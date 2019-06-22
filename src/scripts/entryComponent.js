import { API } from "./data.js"

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
    deleteButton.addEventListener("click", () => API.deleteEntry(journalEntry.id))

    let editButton = document.createElement("button")
    editButton.textContent = "Edit"
    editButton.addEventListener("click", () => console.log("edit button clicked"))

    newEntry.appendChild(deleteButton)
    newEntry.appendChild(editButton)

    return newEntry 
  }
}