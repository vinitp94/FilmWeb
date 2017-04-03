import { RECEIVE_ALL_FAVORITES, RECEIVE_FAVORITE } from '../actions/favorite_actions';
import { merge } from 'lodash';

const FavoriteReducer = (state = [], action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ALL_FAVORITES:
      return action.favorites;
    case RECEIVE_FAVORITE:
      let favoriteClone = state.slice(0);
      favoriteClone.push(action.favorite);
      return favoriteClone;
    default:
      return state;
  }
};

export default FavoriteReducer;
