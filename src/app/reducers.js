import {combineReducers} from 'redux';
import notificationReducer from '../redux/notification/reducers';
import userReducer from '../redux/user/reducers';
import wishlistReducer from '../redux/wishlist/reducers';

const rootReducer = combineReducers({
  user: userReducer,
  wishlist: wishlistReducer,
  showNotification: notificationReducer,
});

export default rootReducer;
