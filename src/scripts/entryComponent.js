let counter = 0
console.log("initial load:", counter)
const Component = {
  makeJournalEntry(journalEntry) {
    counter++
    let newEntry = document.createElement("div")
    newEntry.setAttribute("class", "journalEntry")
    newEntry.setAttribute("id", `entry-${journalEntry.id}`)
    newEntry.innerHTML = `
    <h2 class="prompt">${journalEntry.title}</h2>
    <p>Date: ${journalEntry.date} |  Mood: ${journalEntry.mood}</p>
    <p>Entry: ${journalEntry.entry}</p></br>`
    let deleteButton = document.createElement("button")
    deleteButton.textContent = "Delete"
    newEntry.appendChild(deleteButton)
    console.log(newEntry)
    return newEntry 
  }
}
export {Component}