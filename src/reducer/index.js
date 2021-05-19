
import { combineReducers } from "redux";
import getGenres from './genric';
import getMenulist from './Menu';
import cartReducer from './cartReducer'

const allReducers = combineReducers({
  genres: getGenres,
  menu : getMenulist,
  cart : cartReducer
});

export default allReducers;
