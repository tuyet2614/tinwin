import {
  faApple,
  faFacebook,
  faGooglePlus,
} from '@fortawesome/free-brands-svg-icons';
import {faEyeSlash} from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styleSMS as style} from './style';

const LoginWithSMS: React.FC = ({}) => {
  const navigation = useNavigation();
  const [userName, setUserName] = useState<string>('');
  const options = {
    title: 'Đăng nhập OTP',
    headerTintColor: 'black',
    headerStyle: {
      backgroundColor: '#f2f2f2',
    },
    headerShadowVisible: false, // applied here
  };
  useEffect(() => {
    navigation.setOptions(options);
  }, []);
  return (
    <SafeAreaView style={style.container}>
      <View className="self-center">
        <Image
          source={require('../../assets/authen/Frame.png')}
          style={style.image}></Image>
      </View>
      <View style={style.loginView}>
        <View style={{marginBottom: 20}}>
          <Text style={style.textDescription}>Email / Số điện thoại</Text>
          <TextInput
            style={style.input}
            value={userName}
            placeholder="Nhập Email / Số điện thoại"
            onChange={text => setUserName(text)}
          />
        </View>
      </View>
      <View>
        <Text style={style.textSMS} className="self-center">
          Tinwin sẽ gửi mã OTP để xác nhận đăng nhập
        </Text>
      </View>
      <View style={{marginTop: 40, marginBottom: 31}}>
        <LinearGradient
          className={`${style} rounded-md`}
          colors={['#FD7D00', '#FEB336']}
          start={{x: 0, y: 0.5}}
          end={{x: 1, y: 0.5}}
          locations={[0, 1]}
          style={{alignItems: 'center', height: 50}}>
          <TouchableOpacity
            className="p-3"
            onPress={() =>
              navigation.navigate('OTPAuthen', {title: 'Đăng nhập OTP'})
            }>
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
    </SafeAreaView>
  );
};

export default LoginWithSMS;
