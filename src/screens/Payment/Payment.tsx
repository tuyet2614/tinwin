import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { styles } from '../StatusOrder/style';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faAngleRight,
  faMinusCircle,
  faPlusCircle,
} from '@fortawesome/free-solid-svg-icons';
import { RadioButton } from '../../components/buttons/RadioButton';
import { RadioOrangeBtn } from '../../components/buttons/RadioOrangeBtn';
import BtnOrder from '../../components/buttons/BtnOrder';
import { useNavigation } from '@react-navigation/native';
import {
  anotherOrange,
  colorTextTitleNotifi,
  darkestGrey,
  white,
  whiteGrey,
} from '../../constant/const';

type Props = {};

const Payment = (props: Props) => {
  var x = 1000000;
  x = x.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
  const navigation = useNavigation();
  const navigate = () => {
    navigation.navigate('InternetBanking');
  };
  const navigateDC = () => {
    navigation.navigate('DebitCard');
  };
  const navigateTT = () => {
    navigation.navigate('OrderSuccess');
  };
  return (
    <ScrollView>
      <View style={styles.card}>
        <View style={styles1.styFlex}>
          <Image source={require('../../assets/order/square.png')} />
          <View style={styles1.boxAddress}>
            <Text style={styles1.name}>Robert Fox</Text>
            <Text style={styles1.phone}>(+84) 12 345 6789</Text>
            <Text style={styles1.textAddress}>
              Toà nhà Mitec Tower Dương Đình Nghệ, Yên Hoà, Từ Liêm, Hà Nội
            </Text>
          </View>
          <FontAwesomeIcon
            icon={faAngleRight}
            style={styles1.angleRight}
            size={14}></FontAwesomeIcon>
        </View>
      </View>
      <View style={styles1.mt}>
        <View style={styles.card}>
          <View style={styles1.spbt} className="">
            <View style={styles.title}>
              <Image source={require('../../assets/order/shop.png')}></Image>
              <Text style={styles.textTitle}>TV xiaomi Việt Nam</Text>
            </View>
            <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
          </View>
          <View style={styles.infor}>
            <Image
              source={require('../../assets/order/product.png')}
              style={styles.imgProduct}></Image>
            <View style={styles.textInfor}>
              <Text style={styles.productTitle}>
                Máy Lọc Không Khí Xiaomi Mi Air Purifier 4 lite
              </Text>
              <Text style={styles.productCode}>MÃ SP: a</Text>
              <View style={styles1.flexMgT}>
                <Text style={styles.price}>{x}</Text>
                {/* <Text style={styles.count}>x3</Text> */}
              </View>
            </View>
          </View>
          <View style={styles1.a27}>
            <Image
              source={require('../../assets/payment/Minus.png')}
              style={styles1.img20}></Image>
            <Text style={styles1.count}>1</Text>
            <Image
              source={require('../../assets/payment/Plus.png')}
              style={styles1.img20}></Image>
          </View>
          <View style={styles1.boxLine}>
            <View style={styles1.line} />
            <View style={styles1.line} />
          </View>
          <View style={styles1.flexMargin}>
            <Text style={styles1.totalMoneyVc}>Tổng tiền hàng</Text>
            <Text style={styles1.totalMoney}>{x}</Text>
          </View>
          <View style={styles1.boxLine}>
            <View style={styles1.line} />
            <View style={styles1.line} />
          </View>
          <View style={[styles1.flex, styles1.justi]}>
            <Text style={styles1.textTitleVc}>Phí vận chuyển</Text>
            <Text style={styles1.totalMoneyVc}>{x}</Text>
          </View>
          <View style={styles1.boxLine}>
            <View style={styles1.line} />
            <View style={styles1.line} />
          </View>
          <View style={[styles1.flex, styles1.justi]}>
            <Text style={styles1.textTitleVc}>Tổng số tiền</Text>
            <Text style={styles1.totalMoneyVc}>{x}</Text>
          </View>
        </View>
      </View>
      <Text style={styles1.textpttt}>Phương thức thanh toán</Text>
      <View style={styles1.BoxPay}>
        <View style={styles.card}>
          <View style={styles1.flex}>
            <View style={styles1.marginRb}>
              <RadioButton />
            </View>
            <View style={styles1.flex}>
              <Image
                source={require('../../assets/payment/payment.png')}
                style={styles1.imgCredit}
              />
              <Text style={styles1.textCredit}>Thanh toán khi nhận hàng</Text>
            </View>
          </View>
          <View style={styles1.boxLine}>
            <View style={styles1.line} />
            <View style={styles1.line} />
          </View>
          <View style={styles1.flex}>
            <View style={styles1.marginRb}>
              <RadioOrangeBtn selected={true} />
            </View>
            <View style={styles1.boxImgCredit}>
              <Image
                source={require('../../assets/order/wallet.png')}
                style={styles1.imgCredit}
              />
              <Text style={styles1.textCredit}>Ví Tin tin</Text>
            </View>
          </View>
          <View style={styles1.boxLine}>
            <View style={styles1.line} />
            <View style={styles1.line} />
          </View>
          <TouchableOpacity onPress={navigate} style={styles1.flex}>
            <View style={styles1.marginRb}>
              <RadioButton />
            </View>
            <View style={styles1.boxImgCredit}>
              <Image
                source={require('../../assets/payment/temple.png')}
                style={styles1.imgCredit}
              />
              <Text style={styles1.nnnd}>Ngân hàng nội địa</Text>
            </View>
          </TouchableOpacity>
          <View style={styles1.boxLine}>
            <View style={styles1.line} />
            <View style={styles1.line} />
          </View>
          <TouchableOpacity onPress={navigateDC} style={styles1.flex}>
            <View style={styles1.marginRb}>
              <RadioButton />
            </View>
            <View style={styles1.boxImgCredit}>
              <Image
                source={require('../../assets/payment/credit-card.png')}
                style={styles1.imgCredit}
              />
              <Text style={styles1.textCredit}>Thẻ tín dụng/Ghi nợ</Text>
            </View>
          </TouchableOpacity>
          <View style={styles1.boxLine}>
            <View style={styles1.line} />
            <View style={styles1.line} />
          </View>
        </View>
      </View>
      <View style={styles.card}>
        <View style={[styles1.flex, styles1.justi]}>
          <Text style={styles1.titleTotalMoney}>Tổng thanh toán</Text>
          <Text style={styles1.totalMoney}>6,350,000đ</Text>
        </View>
        <View style={styles1.btntt}>
          <BtnOrder content="Thanh toán" onPress={navigateTT}></BtnOrder>
        </View>
      </View>
    </ScrollView>
  );
};
const styles1 = StyleSheet.create({
  totalMoney: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 22,
    color: anotherOrange,
  },
  btntt: { marginTop: 15 },
  titleTotalMoney: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 22,
    color: darkestGrey,
  },
  line: { flex: 1, height: 1, backgroundColor: whiteGrey },
  boxLine: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  textCredit: {
    marginLeft: 11.5,
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 22,
    color: colorTextTitleNotifi,
  },
  imgCredit: { width: 19, height: 19 },
  boxImgCredit: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  marginRb: { marginRight: 19.5 },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nnnd: {
    marginLeft: 11.5,
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 22,
    color: colorTextTitleNotifi,
  },
  BoxPay: { marginTop: 11, height: 387, backgroundColor: white },
  textpttt: {
    marginLeft: 24,
    marginTop: 11,
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 18,
    color: colorTextTitleNotifi,
  },
  totalMoneyVc: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 22,
    color: colorTextTitleNotifi,
  },
  textTitleVc: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 22,
    color: colorTextTitleNotifi,
  },
  flexMargin: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  img20: { width: 20, height: 20 },
  count: {
    marginLeft: 3,
    marginRight: 3,
    fontWeight: '400',
    fontSize: 19,
    lineHeight: 25,
    color: colorTextTitleNotifi,
  },
  a27: {
    marginLeft: '27%',
    marginTop: 9,
    flexDirection: 'row',
    alignItems: 'center',
  },
  flexMgT: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  spbt: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mt: { marginTop: 5 },
  angleRight: {
    position: 'absolute',
    right: 0,
    bottom: 10,
  },
  textAddress: {
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 14,
    color: colorTextTitleNotifi,
    marginTop: 2,
  },
  phone: {
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 14,
    color: colorTextTitleNotifi,
  },
  name: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 22,
    color: anotherOrange,
  },
  boxAddress: { marginLeft: 15, marginRight: 50 },
  styFlex: { flexDirection: 'row' },
  justi: { justifyContent: 'space-between' },
});
export default Payment;
