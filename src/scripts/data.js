// Make sure to run json-server in api/
// json-server -w entries.json

const API = {
  getJournalEntries() {
    return fetch("http://localhost:3000/entries")
      .then(response => response.json()) 
  }
}