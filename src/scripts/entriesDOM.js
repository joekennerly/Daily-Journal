let counter = 0
console.log("initial load:", counter)

const entryComponents = {
  makeJournalEntry(journalEntry) {
    counter++
    console.log(`makeJournalEntry(${counter})`)
    let newEntry = document.createElement("div")
    let deleteButton = document.createElement("button")
    newEntry.appendChild(deleteButton)
    newEntry.setAttribute("class", "journalEntry")
    newEntry.setAttribute("id", `entry-${counter}`)
    newEntry.innerHTML = `
    <h2 class="prompt">${journalEntry.title}</h2>
    <p>Date: ${journalEntry.date} |  Mood: ${journalEntry.mood}</p>
    <p>Entry: ${journalEntry.entry}</p></br>
    `
    return newEntry 
  }
}

const entryLog = document.querySelector('.entryLog')

const entriesDOM = {

  renderJournalEntries(entries) {
    entries.forEach(entry => {
      entryLog.appendChild( entryComponents.makeJournalEntry(entry))
    });
  }
} 
export {entriesDOM, entryComponents}