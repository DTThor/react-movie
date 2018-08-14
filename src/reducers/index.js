import { combineReducers } from 'redux';

import movies from './movies';
import search from './search';
import history from './history';

const rootReducer = combineReducers({ movies, search, history });

export default rootReducer;
