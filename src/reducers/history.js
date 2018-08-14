function history(state = [], action) {
  switch(action.type) {
    case 'SUBMIT_SEARCH' :
      console.log('submitting a search!!!!')
      return [action.value, ...state]
    case 'CLEAR_HISTORY' :
      console.log('Clear history!!!!')
      return []
    default:
      return state;
  }
}

export default history;
