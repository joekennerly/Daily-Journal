// Request Data to be Displayed
fetch("http://localhost:3000/entries")
.then(response => response.json())
.then(entries => {
  // Push the object
  entries.push(entryTemplate);
  // Invoke the render function
  renderJournalEntries(entries);
});