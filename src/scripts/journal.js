API.getJournalEntries()
  // Pass entries arr to render on dom
  .then(entries => dom.renderJournalEntries(entries))