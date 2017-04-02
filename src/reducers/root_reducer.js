import { combineReducers } from 'redux';
import SearchResultReducer from './search_result_reducer';

const RootReducer = combineReducers({
  searchResults: SearchResultReducer
});

export default RootReducer;
