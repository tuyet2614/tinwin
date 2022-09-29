import {faArrowRotateRight} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/native';
import {useEffect, useRef, useState} from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../assets/colors';
import {styleSMS as style} from './style';

const OTP: React.FC = ({route}) => {
  const navigation = useNavigation();
  const [timeOut, setTimeOut] = useState(60);
  const [OTPComfirm, setOTP] = useState('');
  const {title} = route.params;
  const options = {
    title: title,
    headerTintColor: 'black',
    headerStyle: {
      backgroundColor: '#f2f2f2',
    },
    headerShadowVisible: false, // applied here
  };
  let textInput = useRef(null);
  let lengthInput = 6;

  useEffect(() => {
    navigation.setOptions(options);
    textInput.focus();
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (timeOut > 0) {
        setTimeOut(prev => prev - 1);
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [timeOut]);

  const onChangeText = (val: any) => {
    setOTP(val);
  };
  const onNavigate = () => {
    if (title === 'Đăng ký') {
      navigation.navigate('FormRegister');
    }
    if (title === 'Nhập mã xác minh') {
      navigation.navigate('FormResetPassword');
    }
  };

  return (
    <SafeAreaView style={style.container}>
      <View className="self-center">
        <Image
          source={require('../../assets/authen/Frame.png')}
          style={style.image}></Image>
      </View>

      <View style={{alignSelf: 'center'}}>
        <TextInput
          ref={input => (textInput = input)}
          onChangeText={onChangeText}
          maxLength={lengthInput}
          returnKeyType="done"
          keyboardType="numeric"
          style={{display: 'none'}}></TextInput>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 60,
          }}>
          {Array(lengthInput)
            .fill()
            .map((data, index) => (
              <View
                key={index}
                style={{
                  paddingVertical: 11,
                  width: 40,
                  margin: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderBottomWidth: 1.5,
                  borderColor: '#E5E5EA',
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 32,
                    fontWeight: '400',
                    lineHeight: 40,
                    color: '#48484A',
                  }}
                  onPress={() => textInput.focus()}>
                  {OTPComfirm && OTPComfirm.length > 0 ? OTPComfirm[index] : ''}
                </Text>
              </View>
            ))}
        </View>
      </View>
      <View style={{width: 288, alignSelf: 'center'}}>
        <Text
          style={{
            color: '#636366',
            fontWeight: '500',
            fontSize: 14,
            lineHeight: 18,
            textAlign: 'center',
          }}>
          Quý khách vui lòng nhập mã xác thực gồm 6 chữ số đã được gửi về số
          điện thoại 091****678
        </Text>
      </View>
      {OTPComfirm.length === lengthInput ? (
        <View style={{marginTop: 40, marginBottom: 31}}>
          <LinearGradient
            className={`${style} rounded-md`}
            colors={[colors.primary, colors.primaryToGradient]}
            start={{x: 0, y: 0.5}}
            end={{x: 1, y: 0.5}}
            locations={[0, 1]}
            style={{alignItems: 'center', height: 50}}>
            <TouchableOpacity className="p-3" onPress={onNavigate}>
              <Text
                style={{
                  color: '#FFF',
                  alignSelf: 'center',
                  fontSize: 16,
                  fontWeight: '600',
                  lineHeight: 22,
                }}>
                Tiếp tục
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      ) : (
        ''
      )}
      {OTPComfirm.length === lengthInput ? (
        <></>
      ) : timeOut !== 0 ? (
        <View style={{marginTop: 47, alignSelf: 'center'}}>
          <Text
            style={{
              textAlign: 'center',
              color: '#7B7B80',
              fontSize: 12,
              fontWeight: '500',
              lineHeight: 14,
            }}>
            Vui lòng chờ <Text style={{color: '#FF3B30'}}>{timeOut}s</Text> để
            nhận lại mã xác thực{' '}
          </Text>
        </View>
      ) : (
        <View style={{marginTop: 40, alignSelf: 'center'}}>
          <Text
            style={{
              textAlign: 'center',
              color: '#8E8E93',
              fontSize: 12,
              fontWeight: '500',
              lineHeight: 14,
            }}>
            Bạn vẫn chưa nhận được mã?
          </Text>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              alignSelf: 'center',
            }}>
            <FontAwesomeIcon
              icon={faArrowRotateRight}
              style={{
                color: '#FF3B30',
                marginRight: 5,
                marginTop: 9,
              }}
              size={12}></FontAwesomeIcon>
            <Text
              style={{
                textAlign: 'center',
                color: '#FF3B30',
                fontSize: 12,
                fontWeight: '500',
                lineHeight: 14,
                marginTop: 9,
              }}>
              Nhấn gửi lại mã
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

export default OTP;
