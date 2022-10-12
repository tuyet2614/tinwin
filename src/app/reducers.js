import { combineReducers } from 'redux';
import defaultAddressReducer from '../redux/defaultAddress/reducers';
import notificationReducer from '../redux/notification/reducers';
import userReducer from '../redux/user/reducers';
import wishlistReducer from '../redux/wishlist/reducers';
import productReducer from '../redux/shop/reducers';

const rootReducer = combineReducers({
  user: userReducer,
  wishlist: wishlistReducer,
  showNotification: notificationReducer,
  defaultAddress: defaultAddressReducer,
  product: productReducer
});

export default rootReducer;
