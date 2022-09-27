import {faAngleDown} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../../screens/StatusOrder/style';
import BtnOrder from '../buttons/BtnOrder';
import {ModalPoup} from '../modal/modalCancel';
import {ModalBuyAgain} from '../modal/ModalAddToCart';

interface Props {
  style: string;
  onPress?: () => void;
  prop?: object;
  content: string;
}

const CardOrder: React.FC<Props> = props => {
  const {titleBtn, btnPrimary} = props;
  const [modalVisible, setModalVisible] = useState(false);
  var x = 1000000;
  x = x.toLocaleString('it-IT', {style: 'currency', currency: 'VND'});
  const navigation = useNavigation();
  const navi = () => {
    if (titleBtn === 'Thanh toán ngay') {
      navigation.navigate('DetailOrder');
    }
    setModalVisible(!modalVisible);
  };
  return (
    <View style={styles.card}>
      <View style={styles.title}>
        <Image source={require('../../assets/order/shop.png')}></Image>
        <Text style={styles.textTitle}>TV xiaomi Việt Nam</Text>
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
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.price}>{x}</Text>
            <Text style={styles.count}>x3</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 10,
          marginBottom: 10,
        }}>
        <View style={{flex: 1, height: 1, backgroundColor: '#F9F9F9'}} />
        <View style={{flex: 1, height: 1, backgroundColor: '#F9F9F9'}} />
      </View>
      <TouchableOpacity
        style={{
          alignSelf: 'center',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontWeight: '500',
            fontSize: 12,
            lineHeight: 14,
            color: '#AEAEB2',
            marginRight: 6,
          }}>
          Xem thêm sản phẩm
        </Text>
        <FontAwesomeIcon
          icon={faAngleDown}
          size={12}
          color="#AEAEB2"></FontAwesomeIcon>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 10,
          marginBottom: 10,
        }}>
        <View style={{flex: 1, height: 1, backgroundColor: '#F9F9F9'}} />
        <View style={{flex: 1, height: 1, backgroundColor: '#F9F9F9'}} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={styles.totalCount}>20 sản phẩm</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontWeight: '500',
              fontSize: 14,
              lineHeight: 18,
              color: '#48484A',
            }}>
            Tổng thanh toán
          </Text>
          <Text style={styles.totalPrice}>{x}</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 10,
          marginBottom: 10,
        }}>
        <View style={{flex: 1, height: 1, backgroundColor: '#F9F9F9'}} />
        <View style={{flex: 1, height: 1, backgroundColor: '#F9F9F9'}} />
      </View>
      <View
        style={{
          width: btnPrimary ? 160 : 140,
          alignSelf: 'flex-end',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        {btnPrimary ? (
          <View style={{marginRight: 0}}>
            <BtnOrder
              content={btnPrimary}
              onPress={() => navigation.navigate('Review')}></BtnOrder>
          </View>
        ) : (
          <View></View>
        )}
        <View>
          <BtnOrder content={titleBtn} onPress={() => navi()}></BtnOrder>
        </View>
      </View>
      {titleBtn === 'Hủy đơn' ? (
        <ModalPoup
          modalVisible={modalVisible}
          setModalVisible={() => setModalVisible(!modalVisible)}
        />
      ) : (
        <></>
      )}
      {titleBtn === 'Mua lại' ? (
        <ModalBuyAgain
          modalVisible={modalVisible}
          setModalVisible={() => setModalVisible(!modalVisible)}
        />
      ) : (
        <></>
      )}
    </View>
  );
};

export default CardOrder;
