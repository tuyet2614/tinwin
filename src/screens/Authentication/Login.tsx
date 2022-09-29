import {
  faApple,
  faFacebook,
  faGooglePlus,
} from '@fortawesome/free-brands-svg-icons';
import {faEyeSlash} from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  anotherOrange,
  black,
  blueGrey,
  darkBlue,
  darkGrey,
  grey,
  moreLightGrey,
  orangeDark,
  orangeLight,
} from '../../constant/const';
import {style} from './style';

const Login: React.FC = ({}) => {
  const navigation = useNavigation();
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const setUser = (text: string) => {
    setUserName(text);
  };
  const setPass = (text: string) => {
    setPassword(text);
  };
  const setPassSecu = () => {
    setIsPasswordSecure(!isPasswordSecure);
  };
  const navigate = () => {
    navigation.navigate('ForgotPassword');
  };
  const navigateLoginSMS = () => {
    navigation.navigate('LoginSMS');
  };
  const navigateTabBar = () => {
    navigation.navigate('TabBar');
  };
  const navigateRegister = () => {
    navigation.navigate('Register');
  };
  return (
    <SafeAreaView style={style.container}>
      <View>
        <Image
          source={require('../../assets/logoTinwinPrimary.png')}
          style={style.image}></Image>
        <View style={style.boxTextWelcome}>
          <Text style={style.textWelcome}>
            Chào mừng bạn đến với <Text style={style.textPrimary}>Tinwin.</Text>
          </Text>
        </View>
      </View>
      <View style={style.loginView}>
        <View style={{marginBottom: 20}}>
          <Text style={style.textDescription}>Email / Số điện thoại</Text>
          <TextInput
            style={style.input}
            value={userName}
            placeholder="Nhập Email / Số điện thoại"
            onChange={setUser}
          />
        </View>
        <View>
          <Text style={style.textDescription}>Mật khẩu</Text>
          <TextInput
            style={style.input}
            placeholder="Nhập mật khẩu"
            autoCapitalize="none"
            value={password}
            secureTextEntry={isPasswordSecure}
            onChange={setPass}
          />
          <View
            style={{
              position: 'absolute',
              right: 20,
              top: 40,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TouchableOpacity onPressIn={setPassSecu} onPressOut={setPassSecu}>
              <FontAwesomeIcon icon={faEyeSlash} size={20} color={grey} />
            </TouchableOpacity>
            <Text style={{color: grey}}> | </Text>
            <TouchableOpacity onPress={navigate}>
              <Text style={style.textForgot}>Quên ?</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View>
        <TouchableOpacity onPress={navigateLoginSMS}>
          <Text style={style.textSMS} className="self-end mr-4">
            Đăng nhập bằng sms
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{marginTop: 40, marginBottom: 31}}>
        <LinearGradient
          className={`rounded-md`}
          colors={[orangeLight, orangeDark]}
          start={{x: 0, y: 0.5}}
          end={{x: 1, y: 0.5}}
          locations={[0, 1]}
          style={style1.btnLogin}>
          <TouchableOpacity className="p-3" onPress={navigateTabBar}>
            <Text style={style1.textLogin}>Đăng nhập</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
      <View style={style1.rowCenter}>
        <View style={{flex: 1, height: 1, backgroundColor: moreLightGrey}} />
        <View>
          <Text style={{width: 130, textAlign: 'center', color: darkGrey}}>
            Hoặc tiếp tục với
          </Text>
        </View>
        <View style={{flex: 1, height: 1, backgroundColor: moreLightGrey}} />
      </View>
      <View style={style1.loginWith}>
        <FontAwesomeIcon icon={faFacebook} color={blueGrey} size={55} />
        <FontAwesomeIcon icon={faGooglePlus} color={darkBlue} size={55} />
        <FontAwesomeIcon icon={faApple} color={black} size={55} />
      </View>
      <View style={style1.boxRegister}>
        <Text style={style1.textRegister}>
          Bạn mới biết đến tinwin?{' '}
          <TouchableOpacity className="mt-3" onPress={navigateRegister}>
            <Text style={style1.registerPrimary}>Đăng ký</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </SafeAreaView>
  );
};
const style1 = StyleSheet.create({
  textLogin: {
    color: '#FFF',
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 22,
  },
  rowCenter: {flexDirection: 'row', alignItems: 'center'},
  loginWith: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 200,
    alignSelf: 'center',
    marginTop: 30,
  },
  boxRegister: {
    alignSelf: 'center',
    justifyContent: 'flex-end',
    marginTop: 140,
  },
  textRegister: {
    color: '#8E8E93',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 18,
  },
  registerPrimary: {color: anotherOrange, marginTop: 3},
  btnLogin: {alignItems: 'center', height: 50},
});
export default Login;
