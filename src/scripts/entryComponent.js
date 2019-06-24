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
    <p><i>Date</i> ${journalEntry.date} <i>-&-</i> <i>Mood </i> ${
      journalEntry.mood
    }</p></br>
    <p><i>Entry</i> ${journalEntry.entry}</p>
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
      // console.log(editForm);
      addFormToDom(div, editForm)
    });

    newEntry.appendChild(deleteButton);
    newEntry.appendChild(editButton);

    return newEntry;
  }
};

function createEditForm(entry) {
  return `
  <input id="entry-edit" name="entry-edit" type="text" value="${entry.entry}" autofocus >
  <input type="hidden" id="entry-id" value="${entry.id}">
  <button id="save-edit">save</button>`;
}

function addFormToDom(container, editForm) {
  container.innerHTML = editForm
  let saveBtn = document.querySelector('#save-edit') 
  saveBtn.addEventListener('click', () => {
    let editEntry = document.querySelector('#entry-edit').value
    let updateId = document.querySelector("#entry-id").value
    console.log(updateId);
    
    let updateObject = {
      date: "date",
      title: "title",
      entry: editEntry,
      mood: "mood"
    }
    updateObject.id = updateId
    console.log(updateObject);
    API.updateEntry(updateObject)
  })
}