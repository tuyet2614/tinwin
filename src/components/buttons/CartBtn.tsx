import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { TouchableOpacity } from 'react-native';

const CartBtn: React.FC = () => {
  return (
    <TouchableOpacity>
      <FontAwesomeIcon icon={faCartShopping} color="white" size={25} />
    </TouchableOpacity>
  );
};

export default CartBtn;
