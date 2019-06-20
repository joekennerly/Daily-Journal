import { Component } from "./entryComponent.js"

const entriesDOM = {

  renderJournalEntries(entries) {
    entries.forEach(entry => {
      document.querySelector('.entryLog')
      .appendChild(Component.makeJournalEntry(entry))
    });
  }
} 
export {entriesDOM}