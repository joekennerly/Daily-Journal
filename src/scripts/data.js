console.log("API data");

import { entriesDOM } from "./entriesDOM.js"

export const API = {
  reloadPage() {
    document.querySelector('.entryLog').innerHTML = ""
    return this.getJournalEntries()
      .then(entries => {
        entriesDOM.renderJournalEntries(entries)
    })
  },

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

  updateEntry(entry) {
    return fetch(`http://localhost:3000/entries/${entry.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(entry)
    })
      .then(jsonData => jsonData.json())
      .then(() => this.reloadPage())
  }
}