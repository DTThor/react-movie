function search(state = [], action) {
  switch(action.type) {
    case 'TYPE_SEARCH' :
      console.log("typing a search!!")
      return action.value
    case 'CLEAR_SEARCH' :
      console.log('cleared search!!!!')
      return ''
    default:
      return state;
  }
}

export default search;
