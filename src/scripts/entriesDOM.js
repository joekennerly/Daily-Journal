const entriesDOM = {
  renderJournalEntries(entries) {
    entries.forEach(entry => {
      document.querySelector('.entryLog').appendChild( entryComponents.makeJournalEntry(entry))
    });
  }
} 

let counter = 0

const entryComponents = {
  makeJournalEntry(journalEntry) {
    counter++
    let newEntry = document.createElement("div")
    newEntry.setAttribute("class", "journalEntry")
    newEntry.setAttribute("id", `entry-${counter}`)
    newEntry.innerHTML = `
    <h2 class="prompt">${journalEntry.title}</h2>
    <p>Date: ${journalEntry.date} |  Mood: ${journalEntry.mood}</p>
    <p>Entry: ${journalEntry.entry}</p></br>
    <button class="delete-${counter}">Delete</button>
    `
    return newEntry 
  }
}

export {entriesDOM, entryComponents}