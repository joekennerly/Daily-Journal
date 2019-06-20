export const API = {
  // Each fetch returns an Array
  getJournalEntries: function getJournalEntries() {
    return fetch("http://localhost:3000/entries")
      .then(response => response.json()) 
  },
  postEntry: function postEntry(entry) {
    return fetch("http://localhost:3000/entries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(entry)
    })
    .then (jsonData => jsonData.json())
  },
  // factory function helper
  createEntryObj: function createEntryObj(date, title, entry, mood) {
    return {
      date: date,
      title: title,
      entry: entry,
      mood: mood
    }
  } 
}
// export {API}