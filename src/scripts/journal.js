// Collection of all entries
const allEntries = [
  {
    date: "march",
    title: "title",
    entry: "this is entry",
    mood: "mood"
  },
  {
    date: "hhhhh",
    title: "title",
    entry: "this is entry",
    mood: "mood"
  },
  {
    date: "march",
    title: "title",
    entry: "this is entry",
    mood: "mood"
  },
  {
    date: "march",
    title: "title",
    entry: "this is entry",
    mood: "mood"
  },
  {
    date: "march",
    title: "title",
    entry: "this is entry",
    mood: "mooblahd"
  }
];


// Create a template
const entryTemplate = {
  date: "march",
  title: "title",
  entry: "this is entry",
  mood: "mood"
}

// Push the object
allEntries.push(entryTemplate);

// Select HTML containter
const container = document.querySelector(".entryLog");

// Create and return a string template that will output HTML
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

   entries.forEach( entry => {
     container.innerHTML += makeJournalEntry(entry)
   })
};

// Invoke the render function
renderJournalEntries(allEntries);