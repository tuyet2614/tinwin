import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {styles} from '../StatusOrder/style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

type Props = {};

const InternetBanking = (props: Props) => {
  return (
    <View style={styles.card}>
      <View
        className={`flex-row  h-[45px] py-3.5 rounded-lg border-solid border-[1px] border-gray-200 px-3.5`}
        style={{width: '100%'}}>
        <FontAwesomeIcon icon={faMagnifyingGlass} color="#7B7B80" />

        <TextInput
          className={`pl-2`}
          placeholder={'Tìm kiếm'}
          autoCapitalize="none"
          // onChangeText={text => setSearchText(text)}

          // value={searchText}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            width: '30%',
            height: 107,
            borderWidth: 1,
            borderRadius: 8,
            borderColor: '#0000001A',
            marginTop: 11,
            justifyContent: 'center',
          }}>
          <Image
            source={require('../../assets/payment/Techcombank.png')}
            style={{alignSelf: 'center', width: 48, height: 48}}
          />
          <Text
            style={{
              alignSelf: 'center',
              fontWeight: '400',
              fontSize: 10,
              lineHeight: 12,
              color: '#636366',
            }}>
            Bank Name
          </Text>
        </View>
        <View
          style={{
            width: '30%',
            height: 107,
            borderWidth: 1,
            borderRadius: 8,
            borderColor: '#0000001A',
            marginTop: 11,
          }}></View>
        <View
          style={{
            width: '30%',
            height: 107,
            borderWidth: 1,
            borderRadius: 8,
            borderColor: '#0000001A',
            marginTop: 11,
          }}></View>
        <View
          style={{
            width: '30%',
            height: 107,
            borderWidth: 1,
            borderRadius: 8,
            borderColor: '#0000001A',
            marginTop: 11,
          }}></View>
      </View>
    </View>
  );
};

export default InternetBanking;
