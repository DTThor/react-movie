function search(state = [], action) {
  switch(action.type) {
    case 'TYPE_SEARCH' :
      return action.value
    case 'CLEAR_SEARCH' :
      return ''
    default:
      return state;
  }
}

export default search;
