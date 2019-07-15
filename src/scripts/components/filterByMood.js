export const filterByMood = {
  form() {
    return `
      <fieldset id="filter-by-mood">
        <legend>Filter Entries by Mood</legend>
        <input type="radio" name="mood" value="Okay" id="mood_okay">
        <label for="mood_okay">Okay</label>
        <input type="radio" name="mood" value="Happy" id="mood_happy">
        <label for="mood_happy">Happy</label>
        <input type="radio" name="mood" value="Confused" id="mood_confused">
        <label for="mood_confused">Confused</label>
      </fieldset>`
  }
}