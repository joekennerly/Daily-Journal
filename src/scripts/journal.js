// Select HTML containter
const container = document.querySelector(".entryLog");

// Request Data to be Displayed
fetch("http://localhost:3000/entries")
.then(response => response.json())
.then(entries => {
  // Push the object
  entries.push(entryTemplate);
  // Invoke the render function
  renderJournalEntries(entries);
  });

// Create a template
const entryTemplate = {
  date: "march",
  title: "title",
  entry: "this is entry",
  mood: "mood"
};

// return a string of HTML
const makeJournalEntry = journalEntry => {
  return `
  <div class="journalEntry">
    <h1>${journalEntry.title}</h1>
    <p>${journalEntry.date}</p>
    <p>${journalEntry.entry}</p>
    <p>${journalEntry.mood}</p>
  </div>
  `;
};

// Function that adds each entry to the DOM
const renderJournalEntries = entries => {
  entries.forEach(entry => {
    container.innerHTML += makeJournalEntry(entry);
  });
};