const dom = {
  renderJournalEntries(entries) {
    entries.forEach(entry => {
      document.querySelector('.entryLog').innerHTML += components.makeJournalEntry(entry);
    });
  }
}