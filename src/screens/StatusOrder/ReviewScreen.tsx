import {faStar} from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import BtnOrder from '../../components/buttons/BtnOrder';
import {ModalPoup} from '../../components/modal/modalCancel';
import {styles} from '../../screens/StatusOrder/style';

const Review: React.FC = () => {
  const navigation = useNavigation();
  const [choose, setChoose] = useState(1);
  const [rating, setRating] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    navigation.setOptions({
      title: 'Đánh giá sản phẩm',
    });
  }, []);

  return (
    <SafeAreaView>
      <Text
        style={{
          marginLeft: 24,
          marginTop: 9,
          marginBottom: 10,
          fontWeight: '500',
          fontSize: 12,
          lineHeight: 14,
          color: '#7B7B80',
        }}>
        Sản phẩm
      </Text>
      <View
        style={{
          backgroundColor: '#fff',
          paddingBottom: 30,
          paddingLeft: 24,
          paddingRight: 24,
          paddingTop: 30,
          width: '100%',
        }}>
        <View
          style={{
            marginTop: 0,
            flexDirection: 'row',
          }}>
          <Image
            source={require('../../assets/order/product.png')}
            style={{width: 48, height: 48}}></Image>
          <View style={styles.textInfor}>
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
              <Text
                style={{
                  fontSize: 14,
                  lineHeight: 18,
                  fontWeight: '500',
                  color: '#1F1F1F',
                }}>
                Máy Lọc Không Khí Xiaomi Mi Air Purifier 4 lite
              </Text>
            </TouchableOpacity>
            <View
              style={{
                marginTop: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={styles.price}></Text>
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
        <View
          style={{
            alignSelf: 'center',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => setRating(1)}
            style={{marginRight: 5}}>
            <Image
              source={require('../../assets/order/Vector.png')}
              style={{width: 48, height: 48}}></Image>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setRating(2)}
            style={{marginRight: 5}}>
            {rating >= 2 ? (
              <Image
                source={require('../../assets/order/Vector.png')}
                style={{width: 48, height: 48}}></Image>
            ) : (
              <FontAwesomeIcon
                icon={faStar}
                size={48}
                color="#FEB336"></FontAwesomeIcon>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setRating(3)}
            style={{marginRight: 5}}>
            {rating >= 3 ? (
              <Image
                source={require('../../assets/order/Vector.png')}
                style={{width: 48, height: 48}}></Image>
            ) : (
              <FontAwesomeIcon
                icon={faStar}
                size={48}
                color="#FEB336"></FontAwesomeIcon>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setRating(4)}
            style={{marginRight: 5}}>
            {rating >= 4 ? (
              <Image
                source={require('../../assets/order/Vector.png')}
                style={{width: 48, height: 48}}></Image>
            ) : (
              <FontAwesomeIcon
                icon={faStar}
                size={48}
                color="#FEB336"></FontAwesomeIcon>
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setRating(5)}>
            {rating == 5 ? (
              <Image
                source={require('../../assets/order/Vector.png')}
                style={{width: 48, height: 48}}></Image>
            ) : (
              <FontAwesomeIcon
                icon={faStar}
                size={48}
                color="#FEB336"></FontAwesomeIcon>
            )}
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontWeight: '600',
              fontSize: 16,
              lineHeight: 22,
              color: '#636366',
              marginTop: 45,
              marginBottom: 13,
            }}>
            Đánh giá của bạn
          </Text>
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
              }}></Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 8,
          }}>
          <View style={{width: 160}}>
            <TouchableOpacity
              onPress={() => setChoose(1)}
              className={`rounded-md`}
              style={{
                height: 56,
                alignItems: 'center',
                justifyContent: 'center',
                borderColor: choose === 1 ? '#FC832D' : '#F3F4F6',
                borderWidth: 1,
                paddingLeft: 11,
                paddingRight: 13,
              }}>
              <Text
                style={{
                  color: choose === 1 ? '#FC832D' : '#636366',
                  fontWeight: '400',
                  fontSize: 14,
                  lineHeight: 18,
                  textAlign: 'center',
                }}>
                Sản phẩm rất tuyệt vời
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{width: 160}}>
            <TouchableOpacity
              onPress={() => setChoose(2)}
              className={`rounded-md`}
              style={{
                height: 56,
                alignItems: 'center',
                justifyContent: 'center',
                borderColor: choose === 2 ? '#FC832D' : '#F3F4F6',
                borderWidth: 1,
                paddingLeft: 11,
                paddingRight: 13,
              }}>
              <Text
                style={{
                  color: choose === 2 ? '#FC832D' : '#636366',
                  fontWeight: '400',
                  fontSize: 14,
                  lineHeight: 18,
                  textAlign: 'center',
                }}>
                Đóng gói chắn chắn
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{width: 160}}>
            <TouchableOpacity
              onPress={() => setChoose(3)}
              className={`rounded-md`}
              style={{
                height: 56,
                alignItems: 'center',
                justifyContent: 'center',
                borderColor: choose === 3 ? '#FC832D' : '#F3F4F6',
                borderWidth: 1,
                paddingLeft: 11,
                paddingRight: 13,
              }}>
              <Text
                style={{
                  color: choose === 3 ? '#FC832D' : '#636366',
                  fontWeight: '400',
                  fontSize: 14,
                  lineHeight: 18,
                  textAlign: 'center',
                }}>
                Thời gian giao hàng nhanh
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{width: 160}}>
            <TouchableOpacity
              onPress={() => setChoose(4)}
              className={`rounded-md`}
              style={{
                height: 56,
                alignItems: 'center',
                justifyContent: 'center',
                borderColor: choose === 4 ? '#FC832D' : '#F3F4F6',
                borderWidth: 1,
                paddingLeft: 11,
                paddingRight: 13,
              }}>
              <Text
                style={{
                  color: choose === 4 ? '#FC832D' : '#636366',
                  fontWeight: '400',
                  fontSize: 14,
                  lineHeight: 18,
                  textAlign: 'center',
                }}>
                Đóng gói chắn chắn
              </Text>
            </TouchableOpacity>
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
        <View>
          <View style={{flexDirection: 'column-reverse', marginTop: 200}}>
            <BtnOrder content={'Hoàn thành'}></BtnOrder>
          </View>
        </View>
      </View>
      <ModalPoup
        modalVisible={modalVisible}
        setModalVisible={() => setModalVisible(!modalVisible)}
      />
    </SafeAreaView>
  );
};

export default Review;
