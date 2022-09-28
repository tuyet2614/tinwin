import {
  Image,
  SafeAreaView,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {styles} from '../StatusOrder/style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faAngleDown, faAngleUp} from '@fortawesome/free-solid-svg-icons';
import LinearGradient from 'react-native-linear-gradient';

const NotificationScreen: React.FC = () => {
  const [bool, setBool] = useState(true);
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({title: 'Thông báo'});
  }, []);

  return (
    <ScrollView>
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
            color: '#1F1F1F',
            marginLeft: 20,
            marginTop: 7,
            marginBottom: 7,
          }}>
          Cập nhật quan trọng
        </Text>
        <Text
          style={{
            fontWeight: '500',
            fontSize: 12,
            lineHeight: 14,
            color: '#FC832D',
            marginRight: 20,
            marginTop: 7,
            marginBottom: 7,
          }}>
          {188} thông báo mới
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => setBool(!bool)}
        style={{
          backgroundColor: '#fff',
          paddingBottom: 12,
          paddingLeft: 20,
          paddingRight: 12,
          paddingTop: 10,
        }}>
        <View style={{flexDirection: 'row'}}>
          <Image source={require('../../assets/payment/Redbull.png')}></Image>
          <View
            style={{
              marginLeft: 8,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View>
              <Text
                style={{
                  fontWeight: '500',
                  fontSize: 14,
                  lineHeight: 18,
                  color: '#3A3A3C ',
                  marginBottom: 4,
                }}>
                Giao kiện hàng thành công
              </Text>
              <Text
                style={{
                  fontWeight: '400',
                  fontSize: 10,
                  lineHeight: 12,
                  color: '#7B7B80',
                  marginRight: 10,
                }}>
                Mã vận đơn
                <Text style={{color: '#007AFF'}}> SPXVN0256737377377</Text> của
                đơn hàng{' '}
                <Text style={{color: '#007AFF'}}>SPXVN029922887466</Text> đã
                giao thành công đến bạn{' '}
              </Text>
              <Text
                style={{
                  fontWeight: '400',
                  fontSize: 10,
                  lineHeight: 12,
                  color: '#8E8E93',
                  marginTop: 6,
                }}>
                11:12
              </Text>
            </View>
            {bool ? (
              <FontAwesomeIcon
                icon={faAngleUp}
                style={{marginLeft: 30}}></FontAwesomeIcon>
            ) : (
              <FontAwesomeIcon
                icon={faAngleDown}
                style={{marginLeft: 30}}></FontAwesomeIcon>
            )}
          </View>
        </View>
      </TouchableOpacity>
      <View
        style={{backgroundColor: '#00000005', display: bool ? 'flex' : 'none'}}>
        <View
          style={{
            marginTop: 10,
            marginBottom: 10,
            marginLeft: 57,
            marginRight: 20,
          }}>
          <Text
            style={{
              fontWeight: '500',
              fontSize: 14,
              lineHeight: 18,
              color: '#3A3A3C',
              marginBottom: 4,
            }}>
            Xác nhận đơn hàng
          </Text>
          <Text
            style={{
              fontWeight: '400',
              fontSize: 10,
              lineHeight: 12,
              color: '#7B7B80',
              marginBottom: 6,
            }}>
            Vui lòng chọn “ Đã nhận được hàng” cho đơn hàng{' '}
            <Text style={{color: '#007AFF'}}>SPXVN029922887466</Text>
            nếu bạn hài lòng về sản phẩm, dịch vụ và không có nhu cầu Trả
            hàng/hoàn tiền.{' '}
          </Text>
          <Text
            style={{
              fontWeight: '400',
              fontSize: 10,
              lineHeight: 12,
              color: '#8E8E93',
              marginBottom: 6,
            }}>
            11:12{'      '} 22/05/2022
          </Text>
        </View>
        <View
          style={{
            marginTop: 10,
            marginBottom: 10,
            marginLeft: 57,
            marginRight: 20,
          }}>
          <Text
            style={{
              fontWeight: '500',
              fontSize: 14,
              lineHeight: 18,
              color: '#3A3A3C',
              marginBottom: 4,
            }}>
            Đang vận chuyển
          </Text>
          <Text
            style={{
              fontWeight: '400',
              fontSize: 10,
              lineHeight: 12,
              color: '#7B7B80',
              marginBottom: 6,
            }}>
            Mã vận đơn <Text style={{color: '#007AFF'}}>SPXVN029922887466</Text>{' '}
            của đơn hàng{' '}
            <Text style={{color: '#007AFF'}}>SPXVN029922887466</Text> đã được
            đại lý cửa hàng An An giao cho đơn vị vận chuyển
          </Text>
          <Text
            style={{
              fontWeight: '400',
              fontSize: 10,
              lineHeight: 12,
              color: '#8E8E93',
              marginBottom: 6,
            }}>
            11:12{'      '} 22/05/2022
          </Text>
        </View>
        <View
          style={{
            marginTop: 10,
            marginBottom: 10,
            marginLeft: 57,
            marginRight: 20,
          }}>
          <Text
            style={{
              fontWeight: '500',
              fontSize: 14,
              lineHeight: 18,
              color: '#3A3A3C',
              marginBottom: 4,
            }}>
            Xác nhận đã thanh toán
          </Text>
          <Text
            style={{
              fontWeight: '400',
              fontSize: 10,
              lineHeight: 12,
              color: '#7B7B80',
              marginBottom: 6,
            }}>
            Thanh toán cho đơn hàng{' '}
            <Text style={{color: '#007AFF'}}>SPXVN029922887466</Text> thành
            công. Vui lòng kiểm tra thời gian nhận hàng dự kiến nhé!
          </Text>
          <Text
            style={{
              fontWeight: '400',
              fontSize: 10,
              lineHeight: 12,
              color: '#8E8E93',
              marginBottom: 6,
            }}>
            11:12{'      '} 22/05/2022
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: '#FFF4E5',
          paddingBottom: 12,
          paddingLeft: 20,
          paddingRight: 12,
          paddingTop: 10,
        }}>
        <View style={{flexDirection: 'row'}}>
          <Image source={require('../../assets/payment/Redbull.png')}></Image>
          <View
            style={{
              marginLeft: 8,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={{maxWidth: 272}}>
              <Text
                style={{
                  fontWeight: '500',
                  fontSize: 14,
                  lineHeight: 18,
                  color: '#3A3A3C ',
                  marginBottom: 4,
                }}>
                Xác nhận đơn hàng
              </Text>
              <Text
                style={{
                  fontWeight: '400',
                  fontSize: 10,
                  lineHeight: 12,
                  color: '#7B7B80',
                }}>
                Vui lòng chọn “ Đã nhận được hàng” cho đơn hàng
                <Text style={{color: '#007AFF'}}> SPXVN029922887466</Text> nếu
                bạn hài lòng về sản phẩm, dịch vụ và không có nhu cầu Trả
                hàng/hoàn tiền.
              </Text>
              <Text
                style={{
                  fontWeight: '400',
                  fontSize: 10,
                  lineHeight: 12,
                  color: '#8E8E93',
                  marginTop: 6,
                }}>
                11:12
              </Text>
            </View>
            {bool ? (
              <FontAwesomeIcon
                icon={faAngleUp}
                style={{marginLeft: 30}}></FontAwesomeIcon>
            ) : (
              <FontAwesomeIcon
                icon={faAngleDown}
                style={{marginLeft: 30}}></FontAwesomeIcon>
            )}
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: '#fff',
          paddingBottom: 12,
          paddingLeft: 20,
          paddingRight: 12,
          paddingTop: 10,
        }}>
        <View style={{flexDirection: 'row'}}>
          <LinearGradient
            className={`rounded-md`}
            colors={['#FD7D00', '#FEB336']}
            start={{x: 0, y: 0.5}}
            end={{x: 1, y: 0.5}}
            locations={[0, 1]}
            style={{
              width: 32,
              height: 32,
              padding: 3.5,
            }}>
            <View>
              <Image
                source={require('../../assets/payment/tinwinLG.png')}></Image>
            </View>
          </LinearGradient>

          <View
            style={{
              marginLeft: 8,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={{maxWidth: 295}}>
              <Text
                style={{
                  fontWeight: '500',
                  fontSize: 14,
                  lineHeight: 18,
                  color: '#3A3A3C ',
                  marginBottom: 4,
                }}>
                Nạp tiền thành công
              </Text>
              <Text
                style={{
                  fontWeight: '400',
                  fontSize: 10,
                  lineHeight: 12,
                  color: '#7B7B80',
                }}>
                Nạp thành công số tiền{' '}
                <Text style={{color: '#007AFF'}}>100 000đ</Text> vào ví Tinwin
                từ tài khoản <Text style={{color: '#007AFF'}}>techcombank</Text>
                . Hãy kiểm tra lại tài khoản của mình.
              </Text>
              <Text
                style={{
                  fontWeight: '400',
                  fontSize: 10,
                  lineHeight: 12,
                  color: '#8E8E93',
                  marginTop: 6,
                }}>
                11:12
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default NotificationScreen;
