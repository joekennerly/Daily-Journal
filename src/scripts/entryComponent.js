console.log("entryComponents");

import { API } from "./data.js";

export const Component = {
  // Takes one object and makes html component
  makeJournalEntry(journalEntry) {
    let newEntry = document.createElement("div");
    newEntry.setAttribute("class", "journalEntry");
    newEntry.setAttribute("id", `entry-${journalEntry.id}`);

    newEntry.innerHTML = `
    <h2 class="prompt">${journalEntry.title}</h2>
    <p><i>Date:</i> ${journalEntry.date}</p>
    <p><i>Mood:</i> ${journalEntry.mood}</p>
    <p><i>Entry:</i> ${journalEntry.entry}</p>
    </br>`;

    let div = document.createElement("div")
    newEntry.appendChild(div)

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () =>
      API.deleteEntry(journalEntry.id)
    );

    let editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", () => {
      let editForm = createEditForm(journalEntry)
      addFormToDom(div, editForm)
    });

    newEntry.appendChild(deleteButton);
    newEntry.appendChild(editButton);

    return newEntry;
  }
};

// Functions to make forms and add them to dom

function createEditForm(entry) {
  return `
  <input id="date-edit" type="date" value="${entry.date}">
  <input id="title-edit" type="text" value="${entry.title}">
  <textarea id="entry-edit" type="text">${entry.entry}</textarea>
  <input id="mood-edit" type="text" value="${entry.mood}">
  <input type="hidden" id="entry-id" value="${entry.id}">

  <button id="save-edit">save</button>`;
}

function addFormToDom(container, editForm) {
  container.innerHTML = editForm
  let saveBtn = document.querySelector('#save-edit') 
  saveBtn.addEventListener('click', () => {
    let editDate = document.querySelector('#date-edit').value
    let editTitle = document.querySelector('#title-edit').value
    let editEntry = document.querySelector('#entry-edit').value
    let editMood = document.querySelector('#mood-edit').value
    let updateId = document.querySelector("#entry-id").value
    let updateObject = {
      date: editDate,
      title: editTitle,
      entry: editEntry,
      mood: editMood
    }
    updateObject.id = updateId
    console.log(updateObject);
    API.updateEntry(updateObject)
  })
}

// This is the html I need to build a component out of

{/* <fieldset>
        <label for="JournalDate">
          <p>Date of Entry:</p>
        </label>
        <input type="date" name="journalDate" id="journalDate" required />
      </fieldset>

      <fieldset class="fieldset-large">
        <label for="ConceptsCovered">
          <p>
            Concepts Covered:
          </p>
        </label>
        <input type="text" name="concepts" id="concepts" />
      </fieldset>

      <fieldset class="fieldset-large">
        <label for="Entry">
          <p>
            Journal Entry:
          </p>
        </label>
        <textarea name="entry" id="entry"></textarea>
      </fieldset>

      <fieldset>
        <label for="Mood">
          <p>
            Mood for the day
          </p>
        </label>
        <select name="Mood" id="Mood">
          <option value=""></option>
          <option value="Okay">Okay</option>
          <option value="Happy">Happy</option>
          <option value="Sad">Sad</option>
          <option value="Angry">Angry</option>
          <option value="Confused">Confused</option>
          <option value="Excited">Excited</option>
        </select>
      </fieldset>

      <button id="submit" class="btn prompt">Submit</button> */}