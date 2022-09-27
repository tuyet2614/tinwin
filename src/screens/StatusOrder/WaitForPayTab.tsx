import {faAngleDown} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import BtnOrder from '../../components/buttons/BtnOrder';
import CardOrder from '../../components/cards/CardOrder';
import {styles} from './style';

const WaitPay: React.FC = () => {
  return (
    <ScrollView>
      <CardOrder titleBtn="Thanh toán ngay"></CardOrder>
      <CardOrder titleBtn="Thanh toán ngay"></CardOrder>
      <CardOrder titleBtn="Thanh toán ngay"></CardOrder>
    </ScrollView>
  );
};

export default WaitPay;
