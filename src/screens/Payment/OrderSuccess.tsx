import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

type Props = {};

const OrderSuccess = (props: Props) => {
  return (
    <SafeAreaView style={{backgroundColor: '#fff', height: '100%'}}>
      <View style={{padding: 24}}>
        <Image
          source={require('../../assets/logoTinwinPrimary.png')}
          style={{width: 101, height: 85, alignSelf: 'center'}}
          resizeMode="contain"></Image>
        <Image
          source={require('../../assets/payment/tks.png')}
          style={{
            width: 232,
            height: 232,
            alignSelf: 'center',
            marginTop: 30,
            marginBottom: 53,
          }}
          resizeMode="contain"></Image>
        <Text
          style={{
            fontWeight: '600',
            fontSize: 19,
            lineHeight: 21,
            color: '#FC832D',
            alignSelf: 'center',
            width: 212,
            textAlign: 'center',
          }}>
          Cảm ơn bạn đã mua hàng tại TinWin!
        </Text>
        <Text
          style={{
            fontWeight: '400',
            fontSize: 16,
            lineHeight: 18,
            color: '#434343',
            alignSelf: 'center',
            width: 212,
            textAlign: 'center',
            marginTop: 5,
            marginBottom: 15,
          }}>
          Mã đơn hàng của bạn
        </Text>
        <View
          style={{
            //   flex: 1,
            backgroundColor: '#fff3ea',
            paddingBottom: 11,
            paddingTop: 11,
            paddingLeft: 18,
            borderRadius: 8,
            paddingRight: 18,
            alignItems: 'center',
            // width: 90,
            alignSelf: 'center',
            marginBottom: 120,
          }}>
          <Text
            style={{
              fontWeight: '400',
              fontSize: 12,
              lineHeight: 18,
              color: '#FC832D',
              textAlign: 'center',
            }}>
            VNA123
          </Text>
        </View>
        <TouchableOpacity
          className={`border-orange-primary rounded-md`}
          style={{alignItems: 'center', padding: 14, borderWidth: 1}}>
          <Text className={`text-orange-primary`}>Tiếp tục mua hàng</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default OrderSuccess;

const styles = StyleSheet.create({});
