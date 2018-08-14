function movies(state = { movies: [], isFetching: false }, action) {
  switch(action.type) {
    case 'REQUEST_MOVIES' :
      return Object.assign({}, state, {
        search: action.value,
        isFetching: true
      })
    case 'RECEIVE_MOVIES' :
      return Object.assign({}, state, {
        movies: action.movies,
        isFetching: false,
        lastUpdated: action.receivedAt
      })
    case 'CLEAR_SEARCH' :
      return []
    default:
      return state;
  }
}

export default movies;
