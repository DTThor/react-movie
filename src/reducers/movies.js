function movies(state = { movies: [], isFetching: false }, action) {
  switch(action.type) {
    case 'REQUEST_MOVIES' :
      console.log('Requesting Movies!!!!')
      return Object.assign({}, state, {
        search: action.value,
        isFetching: true
      })
    case 'RECEIVE_MOVIES' :
      console.log('Receiving Movies!!!')
      return Object.assign({}, state, {
        movies: action.movies,
        isFetching: false,
        lastUpdated: action.receivedAt
      })
    case 'CLEAR_SEARCH' :
      console.log('Clear search!!!!')
      return []
    default:
      return state;
  }
}

export default movies;
