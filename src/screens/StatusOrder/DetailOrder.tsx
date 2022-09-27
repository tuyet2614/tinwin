import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import {styles} from './style';
import {useNavigation} from '@react-navigation/native';
import BtnOrder from '../../components/buttons/BtnOrder';

type Props = {};

const DetailOrder: React.FC = (props: Props) => {
  const navigation = useNavigation();
  const {titleBtn, btnPrimary} = props;
  var x = 1000000;
  x = x.toLocaleString('it-IT', {style: 'currency', currency: 'VND'});

  useEffect(() => {
    navigation.setOptions({
      title: 'Thông tin đơn hàng',
    });
  }, []);
  return (
    <ScrollView>
      <View style={styles.card}>
        <View
          style={{
            //   flex: 1,
            borderWidth: 1,
            borderColor: '#feb27b',
            height: 62,
            backgroundColor: '#fff3ea',
            paddingBottom: 11,
            paddingTop: 11,
            paddingLeft: 14,
            borderRadius: 8,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../assets/order/logoShop.png')}
            style={{width: 40, height: 40}}
          />
          <Text
            style={{
              marginLeft: 13,
              fontWeight: '600',
              fontSize: 14,
              lineHeight: 18,
              color: '#1F1F1F',
            }}>
            Đơn hàng đã được xác nhận
          </Text>
        </View>
      </View>
      <Text
        style={{
          marginLeft: 24,
          marginTop: 7,
          marginBottom: 8,
          fontWeight: '500',
          fontSize: 14,
          lineHeight: 18,
          color: '#3A3A3C',
        }}>
        Địa chỉ nhận hàng
      </Text>
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
        </View>
      </View>
      <View style={{marginTop: 5}}>
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
        <View style={{marginTop: 11}}>
          <View style={styles.card}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
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
        </View>
        <View style={{marginTop: 11}}>
          <View style={styles.card}>
            <View
              style={{
                height: 62,
                backgroundColor: '#fff3ea',
                paddingBottom: 11,
                paddingTop: 11,
                paddingLeft: 14,
                borderRadius: 8,
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 30,
              }}>
              <Text
                style={{
                  marginLeft: 13,
                  fontWeight: '400',
                  fontSize: 14,
                  lineHeight: 17,
                  color: '#FC832D',
                  textAlign: 'center',
                }}>
                Mã đơn hàng: VNA123
              </Text>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text
                style={{
                  fontWeight: '500',
                  fontSize: 12,
                  lineHeight: 14,
                  color: '#8E8E93',
                }}>
                Thời gian đặt hàng
              </Text>
              <Text
                style={{
                  fontWeight: '500',
                  fontSize: 12,
                  lineHeight: 14,
                  color: '#8E8E93',
                }}>
                25/04/2022 07:05
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
                marginTop: 10,
              }}>
              <Text
                style={{
                  fontWeight: '500',
                  fontSize: 12,
                  lineHeight: 14,
                  color: '#8E8E93',
                }}>
                Thời gian đặt hàng
              </Text>
              <Text
                style={{
                  fontWeight: '500',
                  fontSize: 12,
                  lineHeight: 14,
                  color: '#8E8E93',
                }}>
                25/04/2022 07:05
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 4,
                marginBottom: 42,
              }}>
              <View style={{flex: 1, height: 1, backgroundColor: '#F9F9F9'}} />
              <View style={{flex: 1, height: 1, backgroundColor: '#F9F9F9'}} />
            </View>
            <View style={{marginBottom: 10}}>
              <BtnOrder
                content="Abc"
                onPress={() => navigation.navigate('DetailOrder')}></BtnOrder>
            </View>
            <BtnOrder
              content="Abc"
              onPress={() => navigation.navigate('DetailOrder')}></BtnOrder>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default DetailOrder;
