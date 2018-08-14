function movies(state = [], action) {
  switch(action.type) {
    case 'SUBMIT_SEARCH' :
      console.log('submitting a search!!!!')
      return ['make', 'omdb', 'request', 'for', action.value]
    case 'CLEAR_SEARCH' :
      console.log('Clear search!!!!')
      return []
    default:
      return state;
  }
}

export default movies;
