import { entryComponents } from "./entryComponent.js"


const entriesDOM = {
  renderJournalEntries(entries) {
    entries.forEach(entry => {
      document.querySelector('.entryLog').appendChild( entryComponents.makeJournalEntry(entry))
    });
  }
} 

export {entriesDOM}