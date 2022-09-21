import {Image, SafeAreaView, Text, View} from 'react-native';
import {colors} from '../assets/colors';
import LinearGradient from 'react-native-linear-gradient';

const Splash: React.FC = () => {
  return (
    <SafeAreaView>
      <LinearGradient
        colors={['#FD7D00', '#FEB336']}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0.5}}
        locations={[0, 1]}>
        <View className="flex-1 h-full items-center justify-center">
          <Image
            className="h-48 w-60 "
            source={require('../assets/logoTinwin.png')}
          />
          <Text className="text-white font-bold text-2xl">
            Xoá mọi khoảng cách
          </Text>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Splash;
