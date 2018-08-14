import { createStore, compose } from 'redux';
import * as actionCreators from './actions/actionCreators';
// import the root reducer
import rootReducer from './reducers/index';

// create an object for the default data
const defaultState = {
  movies: [],
  search: '',
};

const store = createStore(rootReducer, defaultState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// store.dispatch(actionCreators.submitSearch())

export default store;
