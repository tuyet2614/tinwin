import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {styles} from '../StatusOrder/style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faAngleRight,
  faMinusCircle,
  faPlusCircle,
} from '@fortawesome/free-solid-svg-icons';
import {RadioButton} from '../../components/buttons/RadioButton';
import {RadioOrangeBtn} from '../../components/buttons/RadioOrangeBtn';
import BtnOrder from '../../components/buttons/BtnOrder';
import {useNavigation} from '@react-navigation/native';

type Props = {};

const Payment = (props: Props) => {
  var x = 1000000;
  x = x.toLocaleString('it-IT', {style: 'currency', currency: 'VND'});
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={styles.card}>
        <View style={{flexDirection: 'row'}}>
          <Image source={require('../../assets/order/square.png')} />
          <View style={{marginLeft: 15, marginRight: 50}}>
            <Text
              style={{
                fontWeight: '600',
                fontSize: 16,
                lineHeight: 22,
                color: '#FC832D',
              }}>
              Robert Fox
            </Text>
            <Text
              style={{
                fontWeight: '500',
                fontSize: 12,
                lineHeight: 14,
                color: '#48484A',
              }}>
              (+84) 12 345 6789
            </Text>
            <Text
              style={{
                fontWeight: '500',
                fontSize: 12,
                lineHeight: 14,
                color: '#48484A',
                marginTop: 2,
              }}>
              Toà nhà Mitec Tower Dương Đình Nghệ, Yên Hoà, Từ Liêm, Hà Nội
            </Text>
          </View>
          <FontAwesomeIcon
            icon={faAngleRight}
            style={{
              position: 'absolute',
              right: 0,
              bottom: 10,
            }}
            size={14}></FontAwesomeIcon>
        </View>
      </View>
      <View style={{marginTop: 5}}>
        <View style={styles.card}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
            className="">
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
              <View
                style={{
                  marginTop: 10,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={styles.price}>{x}</Text>
                {/* <Text style={styles.count}>x3</Text> */}
              </View>
            </View>
          </View>
          <View
            style={{
              marginLeft: '27%',
              marginTop: 9,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={require('../../assets/payment/Minus.png')}
              style={{width: 20, height: 20}}></Image>
            <Text
              style={{
                marginLeft: 3,
                marginRight: 3,
                fontWeight: '400',
                fontSize: 19,
                lineHeight: 25,
                color: '#48484A',
              }}>
              1
            </Text>
            <Image
              source={require('../../assets/payment/Plus.png')}
              style={{width: 20, height: 20}}></Image>
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
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 20,
            }}>
            <Text
              style={{
                fontWeight: '400',
                fontSize: 16,
                lineHeight: 22,
                color: '#48484A',
              }}>
              Tổng tiền hàng
            </Text>
            <Text
              style={{
                fontWeight: '400',
                fontSize: 16,
                lineHeight: 22,
                color: '#48484A',
              }}>
              {x}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 4,
              marginBottom: 10,
            }}>
            <View style={{flex: 1, height: 1, backgroundColor: '#F9F9F9'}} />
            <View style={{flex: 1, height: 1, backgroundColor: '#F9F9F9'}} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontWeight: '400',
                fontSize: 16,
                lineHeight: 22,
                color: '#48484A',
              }}>
              Phí vận chuyển
            </Text>
            <Text
              style={{
                fontWeight: '400',
                fontSize: 16,
                lineHeight: 22,
                color: '#48484A',
              }}>
              {x}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 4,
              marginBottom: 10,
            }}>
            <View style={{flex: 1, height: 1, backgroundColor: '#F9F9F9'}} />
            <View style={{flex: 1, height: 1, backgroundColor: '#F9F9F9'}} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontWeight: '400',
                fontSize: 16,
                lineHeight: 22,
                color: '#48484A',
              }}>
              Tổng số tiền
            </Text>
            <Text
              style={{
                fontWeight: '400',
                fontSize: 16,
                lineHeight: 22,
                color: '#48484A',
              }}>
              {x}
            </Text>
          </View>
        </View>
      </View>
      <Text
        style={{
          marginLeft: 24,
          marginTop: 11,
          fontWeight: '500',
          fontSize: 14,
          lineHeight: 18,
          color: '#3A3A3C',
        }}>
        Phương thức thanh toán
      </Text>
      <View style={{marginTop: 11, height: 387, backgroundColor: '#fff'}}>
        <View style={styles.card}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View style={{marginRight: 19.5}}>
              <RadioButton />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../assets/payment/payment.png')}
                style={{width: 19, height: 19}}
              />
              <Text
                style={{
                  marginLeft: 11.5,
                  fontWeight: '500',
                  fontSize: 14,
                  lineHeight: 22,
                  color: '#3A3A3C',
                }}>
                Thanh toán khi nhận hàng
              </Text>
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
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View style={{marginRight: 19.5}}>
              <RadioOrangeBtn selected={true} />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../assets/order/wallet.png')}
                style={{width: 19, height: 19}}
              />
              <Text
                style={{
                  marginLeft: 11.5,
                  fontWeight: '500',
                  fontSize: 14,
                  lineHeight: 22,
                  color: '#3A3A3C',
                }}>
                Ví Tin tin
              </Text>
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
            onPress={() => navigation.navigate('InternetBanking')}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View style={{marginRight: 19.5}}>
              <RadioButton />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../assets/payment/temple.png')}
                style={{width: 19, height: 19}}
              />
              <Text
                style={{
                  marginLeft: 11.5,
                  fontWeight: '500',
                  fontSize: 14,
                  lineHeight: 22,
                  color: '#3A3A3C',
                }}>
                Ngân hàng nội địa
              </Text>
            </View>
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
          <TouchableOpacity
            onPress={() => navigation.navigate('DebitCard')}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View style={{marginRight: 19.5}}>
              <RadioButton />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../assets/payment/credit-card.png')}
                style={{width: 19, height: 19}}
              />
              <Text
                style={{
                  marginLeft: 11.5,
                  fontWeight: '500',
                  fontSize: 14,
                  lineHeight: 22,
                  color: '#3A3A3C',
                }}>
                Thẻ tín dụng/Ghi nợ
              </Text>
            </View>
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
        </View>
      </View>
      <View style={styles.card}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            style={{
              fontWeight: '400',
              fontSize: 16,
              lineHeight: 22,
              color: '#48484A',
            }}>
            Tổng thanh toán
          </Text>
          <Text
            style={{
              fontWeight: '600',
              fontSize: 16,
              lineHeight: 22,
              color: '#FC832D',
            }}>
            6,350,000đ
          </Text>
        </View>
        <View style={{marginTop: 15}}>
          <BtnOrder
            content="Thanh toán"
            onPress={() => navigation.navigate('OrderSuccess')}></BtnOrder>
        </View>
      </View>
    </ScrollView>
  );
};

export default Payment;
