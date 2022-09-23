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
import {styleRegister as style} from './style';

const Register: React.FC = ({}) => {
  const navigation = useNavigation();
  const [userName, setUserName] = useState<string>('');
  const options = {
    title: '',
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
    <SafeAreaView>
      <View style={style.container}>
        <View>
          <Image
            source={require('../../assets/logoTinwinPrimary.png')}
            style={style.image}></Image>
          <View style={style.boxTextWelcome}>
            <Text style={style.textWelcome}>
              Chào mừng bạn đến với{' '}
              <Text style={style.textPrimary}>Tinwin.</Text>
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
              onChange={text => setUserName(text)}
            />
          </View>
        </View>
        <View>
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
                navigation.navigate('OTPAuthen', {title: 'Đăng ký'})
              }>
              <Text
                style={{
                  color: '#FFF',
                  alignSelf: 'center',
                  fontSize: 16,
                  fontWeight: '600',
                  lineHeight: 22,
                }}>
                Tạo tài khoản
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
      <View style={{width: 260, alignSelf: 'center'}}>
        <Text style={style.textPolicy} className="self-center">
          Bằng cách tạo một tài khoản, bạn đồng ý với{' '}
          <Text style={style.textPolicyBlack}>Thỏa thuận Người dùng</Text> và{' '}
          <Text style={style.textPolicyBlack}>Chính sách Quyền riêng tư</Text>{' '}
          của TinWin
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          alignSelf: 'flex-end',
          bottom: 0,
          marginTop: 70,
        }}>
        <Image
          source={require('../../assets/authen/vegetable.png')}
          style={{width: 375, height: 290}}></Image>
      </View>
    </SafeAreaView>
  );
};

export default Register;
