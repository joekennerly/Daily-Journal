import { entriesDOM } from "./entriesDOM.js"

export const API = {
  // Each fetch returns an Array
  getJournalEntries() {
    return fetch("http://localhost:3000/entries")
      .then(response => response.json()) 
  },

  postEntry(entry) {
    return fetch("http://localhost:3000/entries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(entry)
    })
      .then(jsonData => jsonData.json())
      .then(() => this.reloadPage());
  },

  deleteEntry(id) {
    return fetch(`http://localhost:3000/entries/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(jsonData => jsonData.json())
      .then(() => this.reloadPage())
  },

  updateEntry(id) {
    return fetch(`http://localhost:3000/entries/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(jsonData => jsonData.json())
      .then(() => this.reloadPage())
  },

  reloadPage() {
    document.querySelector('.entryLog').innerHTML = ""
    return this.getJournalEntries()
      .then(entries => {
        entriesDOM.renderJournalEntries(entries)
    })
  }
}