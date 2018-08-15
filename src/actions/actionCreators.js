import axios from 'axios';
const { DEV_API_URL, PROD_API_URL, NODE_ENV } = process.env

export function typeSearch(value) {
  return {
    type: 'TYPE_SEARCH',
    value
  }
}

export function requestMovies(value) {
  return {
    type: 'REQUEST_MOVIES',
    value
  }
}

export function receiveMovies(value, data) {
  return {
    type: 'RECEIVE_MOVIES',
    value,
    movies: data.Search,
    receivedAt: Date.now()
  }
}

export function fetchMovies(value) {
  return dispatch => {
    dispatch(requestMovies(value))
    let typedSearch = NODE_ENV === 'development' ? DEV_API_URL : PROD_API_URL
    return axios.get(`${typedSearch}${value}`)
      .then(({ data }) => dispatch(receiveMovies(value, data)))
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
