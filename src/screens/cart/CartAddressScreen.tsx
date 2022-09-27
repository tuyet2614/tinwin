import {SafeAreaView} from 'react-native';
import HeaderStack from '../../components/HeaderStack';

const CartAddressScreen: React.FC = () => {
  return (
    <SafeAreaView>
      <HeaderStack text="Địa chỉ nhận hàng" isGoback={true} />
    </SafeAreaView>
  );
};

export default CartAddressScreen;
