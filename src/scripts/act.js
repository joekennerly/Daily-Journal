export const act = {
  filterButtons() {
    let allRadioButtons = document.getElementsByName('mood')
    allRadioButtons.forEach(radioButton => {
      radioButton.addEventListener("click", event => {
        const mood = event.target.value
        console.log(mood)
        API.getJournalEntries()
          .then(entries => {
          let filteredEntries = entries.filter(anEntry => anEntry.mood === mood)
          console.log(filteredEntries)
          document.querySelector(".entryLog").innerHTML = ""
          entriesDOM.renderJournalEntries(filteredEntries)
        });
      })
    })
  }
}