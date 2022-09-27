import {combineReducers} from 'redux';
import userReducer from '../redux/user/reducers';
import wishlistReducer from '../redux/wishlist/reducers';

const rootReducer = combineReducers({
  user: userReducer,
  wishlist: wishlistReducer,
});

export default rootReducer;
