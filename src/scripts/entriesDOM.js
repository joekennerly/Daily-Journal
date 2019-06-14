// Function that adds each entry to the DOM
function renderJournalEntries (entries) {
  entries.forEach(entry => {
    document.querySelector('.entryLog').innerHTML += makeJournalEntry(entry);
  });
};