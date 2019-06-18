const API = {
  getJournalEntries() {
    return fetch("http://localhost:3000/entries")
      .then(response => response.json()) 
  } // Returns an Array
}

export {API}