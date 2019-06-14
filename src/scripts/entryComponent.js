const components = {
  makeJournalEntry(journalEntry) {
    return `
    <div class="journalEntry">
      <h1>${journalEntry.title}</h1>
      <p>${journalEntry.date}</p>
      <p>${journalEntry.entry}</p>
      <p>${journalEntry.mood}</p>
    </div>
    `;
  }
}
