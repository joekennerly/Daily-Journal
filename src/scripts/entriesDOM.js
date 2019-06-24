console.log('entriesDOM')

import { Component } from "./entryComponent.js"

export const entriesDOM = {

  // Pass array of entry objs 
  renderJournalEntries(entries) {

    // Loop over the array
    entries.forEach(entry => {

      // Output container
      document.querySelector('.entryLog')

      // Append component made from entry obj
      .appendChild(Component.makeJournalEntry(entry))
    });
  }
} 