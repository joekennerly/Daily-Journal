import { Component } from "./entryComponent.js"

export const entriesDOM = {
  renderJournalEntries(entries) {
    entries.forEach(entry => {
      document.querySelector('.entryLog')
      .appendChild(Component.makeJournalEntry(entry))
    });
  }
} 