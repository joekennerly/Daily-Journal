// console.log('entriesDOM')

import { Component } from "./entryComponent.js"
import { act } from "./act.js"
import { searchBar } from "./components/searchbar.js"
import { API } from "./data.js"

export const dom = {
  // Pass array of entry objs
  renderJournalEntries(entries) {
    // Loop over the array
    entries.forEach(entry => {
      // Output container
      document.querySelector('.entryLog')
      // Append component made from entry obj
      .appendChild(Component.makeJournalEntry(entry))
    });
  },

  addSearchBar() {
    act.plus(searchBar.comp(), "#filter-form")
    act.select("#search-input").addEventListener("keyup", (event) => {
      if (event.key === "Enter") {
        let search = act.select("#search-input").value
        console.log("search", search)
        API.get("entries").then(entries => {
          // console.log("original", entries)
          entries.filter(entry => {
            // console.log(entry)
            // console.log(Object.values(entry))
            let valuesArray = Object.values(entry)
            console.log(valuesArray)
            if (valuesArray.includes(search)) {
              console.log("nice!")
            }
          })
        })
      }
    })
  }
}

