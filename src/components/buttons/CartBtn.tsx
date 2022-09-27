import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/native';
import {Text, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';
import {getWishlistState} from '../../redux/wishlist/selectors';

interface Props {
  color: string;
  style?: string;
}

const CartBtn: React.FC<Props> = (props: Props) => {
  const navigation = useNavigation();
  const {color, style} = props;

  const wishlistSelector = useSelector(getWishlistState);
  const wishlist = wishlistSelector.wishlist;

  return (
    <TouchableOpacity
      className={`${style}`}
      onPress={() => navigation.navigate('CartNavigator')}>
      <FontAwesomeIcon icon={faCartShopping} color={color} size={25} />
      {wishlist.length > 0 && (
        <View className="bg-blue-200 w-4 h-4 absolute items-center justify-center rounded-full top-2 right-2">
          <Text className="text-orange-primary text-xs">{wishlist.length}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default CartBtn;
