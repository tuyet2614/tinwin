import {
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
} from 'react-native';
import React from 'react';
import {styles} from '../StatusOrder/style';
import BtnOrder from '../../components/buttons/BtnOrder';

type Props = {};

const DebitCard = (props: Props) => {
  return (
    <SafeAreaView>
      <View
        style={{
          marginLeft: 24,
          marginRight: 24,
          marginTop: 7,
          marginBottom: 8,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            fontWeight: '500',
            fontSize: 14,
            lineHeight: 18,
            color: '#3A3A3C',
          }}>
          Thông tin thẻ
        </Text>
        <View
          style={{
            justifyContent: 'center',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../assets/payment/cc-visa.png')}
            style={{width: 23, height: 18}}></Image>
          <Image
            source={require('../../assets/payment/cc-mastercard.png')}
            style={{width: 23, height: 18}}></Image>
          <Image
            source={require('../../assets/payment/cc-jcb.png')}
            style={{width: 23, height: 18}}></Image>
        </View>
      </View>
      <View
        style={{
          backgroundColor: '#fff',
          paddingBottom: 30,
          paddingLeft: 24,
          paddingRight: 24,
          paddingTop: 30,
          height: '100%',
        }}>
        <View style={{height: '88%'}}>
          <Text
            style={{
              fontWeight: '500',
              fontSize: 14,
              lineHeight: 20,
              color: '#7B7B80',
              marginBottom: 5,
            }}>
            Số thẻ<Text style={{color: '#FF3B30'}}>*</Text>
          </Text>
          <View
            className={`flex-row  h-[45px] py-3.5 rounded-lg border-solid border-[1px] border-gray-200 px-3.5 mb-2`}
            style={{width: '100%'}}>
            <TextInput
              className={`pl-2`}
              placeholder={'Nhập số in trên thẻ'}
              autoCapitalize="none"
              // onChangeText={text => setSearchText(text)}

              // value={searchText}
            />
          </View>
          <Text
            style={{
              fontWeight: '500',
              fontSize: 14,
              lineHeight: 20,
              color: '#7B7B80',
              marginBottom: 5,
              marginTop: 10,
            }}>
            Tên chủ thẻ<Text style={{color: '#FF3B30'}}>*</Text>
          </Text>
          <View
            className={`flex-row  h-[45px] py-3.5 rounded-lg border-solid border-[1px] border-gray-200 px-3.5`}
            style={{width: '100%'}}>
            <TextInput
              className={`pl-2`}
              placeholder={'Nhập tên in trên thẻ'}
              autoCapitalize="none"
              // onChangeText={text => setSearchText(text)}

              // value={searchText}
            />
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <Text
                style={{
                  fontWeight: '500',
                  fontSize: 14,
                  lineHeight: 20,
                  color: '#7B7B80',
                  marginBottom: 5,
                  marginTop: 10,
                }}>
                Ngày hết hạn<Text style={{color: '#FF3B30'}}>*</Text>
              </Text>
              <View
                className={`flex-row  h-[45px] py-3.5 rounded-lg border-solid border-[1px] border-gray-200 px-3.5`}
                style={{width: 181}}>
                <TextInput
                  className={`pl-2`}
                  placeholder={'Nhập ngày hết hạn'}
                  autoCapitalize="none"
                  // onChangeText={text => setSearchText(text)}

                  // value={searchText}
                />
              </View>
            </View>
            <View>
              <Text
                style={{
                  fontWeight: '500',
                  fontSize: 14,
                  lineHeight: 20,
                  color: '#7B7B80',
                  marginBottom: 5,
                  marginTop: 10,
                }}>
                CCV<Text style={{color: '#FF3B30'}}>*</Text>
              </Text>
              <View
                className={`flex-row  h-[45px] py-3.5 rounded-lg border-solid border-[1px] border-gray-200 px-3.5`}
                style={{width: 136}}>
                <TextInput
                  className={`pl-2`}
                  placeholder={'Nhập mã'}
                  autoCapitalize="none"
                  // onChangeText={text => setSearchText(text)}

                  // value={searchText}
                />
              </View>
            </View>
          </View>
        </View>
        <BtnOrder content="Thêm thẻ" />
      </View>
    </SafeAreaView>
  );
};

export default DebitCard;
