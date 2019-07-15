import { API } from "./data.js"
import { dom } from "./dom.js"

export const act = {
  render(component, container) {
    document.querySelector(container).innerHTML = component
  },
  plus(component, container) {
    document.querySelector(container).innerHTML += component
  },
  select(selection) {
    return document.querySelector(selection)
  },

  postNewEntry() {
    document.querySelector("#submit").addEventListener("click", () => {
      function createEntryObj(date, title, entry, mood) {
        return {
          date: date,
          title: title,
          entry: entry,
          mood: mood
        };
      }
      let currentObj = createEntryObj(
        document.querySelector("#journalDate").value,
        document.querySelector("#concepts").value,
        document.querySelector("#entry").value,
        document.querySelector("#Mood").value
      );

      function formCheck(object) {
        return Object.values(object).includes("")
      }

      if (formCheck(currentObj)) {
        alert("All fields must be filled out!")
      }
      else {
        API.postEntry(currentObj)
      }

    });
  },

  filterHandler(callback) {
    this.select("#filter-form").addEventListener("click", callback)
  }
}