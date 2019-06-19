const API = {
  getJournalEntries() {
    return fetch("http://localhost:3000/entries")
      .then(response => response.json()) 
  }, // Returns an Array
  postEntry(entry) {
    return fetch("http://localhost:3000/entries", {
      method: "POST",
      header: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(entry)
    })
  }
}

export {API}