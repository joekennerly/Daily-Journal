const API = {
  getJournalEntries: function getJournalEntries() {
    return fetch("http://localhost:3000/entries")
      .then(response => response.json()) 
  }, // Returns an Array
  postEntry: function postEntry(entry) {
    return fetch("http://localhost:3000/entries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(entry)
    })
  },
  // factory function helper
  createEntryObj: function createEntryObj(date, concepts, entry, mood) {
    return {
      date: date,
      concepts: concepts,
      entry: entry,
      mood: mood
    }
  } 
}
export {API}