// console.log('entriesDOM')

import { API } from "./data.js";
import { act } from "./act.js";
import { Component } from "./entryComponent.js";
import { searchBar } from "./components/searchbar.js";
import { filterByMood } from "./components/filterByMood.js";

export const dom = {
  // Pass array of entry objs
  renderJournalEntries(entries) {
    // Loop over the array
    entries.forEach(entry => {
      // Output container
      document
        .querySelector(".entryLog")
        // Append component made from entry obj
        .appendChild(Component.makeJournalEntry(entry));
    });
  },

  filterButtons() {
    act.plus(filterByMood.form(), "#filter-form");
    act.filterHandler(e => {
      if (e.target.id.startsWith("mood")) {
        const mood = e.target.value;
        API.getJournalEntries().then(entries => {
          let filteredEntries = entries.filter(
            anEntry => anEntry.mood === mood
          );
          document.querySelector(".entryLog").innerHTML = "";
          this.renderJournalEntries(filteredEntries);
        });
      }
    });
  },

  addSearchBar() {
    act.plus(searchBar.comp(), "#filter-form");
    act.select("#search-input").addEventListener("keyup", event => {
      if (event.key === "Enter") {
        // Save search value as "search"
        let search = act.select("#search-input").value;
        let filteredBySearch = [];
        API.get("entries").then(entries => {
          entries.forEach(entry => {
            let lowerCaseValues = Object.values(entry).map(value => {
              if (typeof value === "string") return value.toLowerCase();
            });
            if (lowerCaseValues.includes(search)) {
              filteredBySearch.push(entry)
            }
          });
          console.log(filteredBySearch)
          act.select(".entryLog").innerHTML = ""
          this.renderJournalEntries(filteredBySearch)
        });
      }
    });
  }
};
