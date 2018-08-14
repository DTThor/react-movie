export function typeSearch(value) {
  return {
    type: 'TYPE_SEARCH',
    value
  }
}

export function submitSearch(value) {
  return {
    type: 'SUBMIT_SEARCH',
    value
  }
}

export function clearSearch() {
  return {
    type: 'CLEAR_SEARCH',
  }
}

export function clearHistory() {
  return {
    type: 'CLEAR_HISTORY',
  }
}
