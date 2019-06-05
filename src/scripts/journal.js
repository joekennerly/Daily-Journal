// Once you define that variable and give it a default value of a blank array, use the push() method to add the journalEntry object you defined to the array.

// Create a container
const allEntries = []
console.log(allEntries);

// Create a template
const journalEntryObject = {
  date:"march",
  title:"title",
  entry:"this is entry",
  mood:"mood"
}
console.log(journalEntryObject);

// Push the template literal
allEntries.push(`${journalEntryObject}`)

console.log(allEntries)