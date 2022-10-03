import { Image, Text, View } from 'react-native';
import { logo_Tinwin_Primary } from '../../assets/images';

const HeaderHome: React.FC = () => {
  return (
    <View className="flex-row items-center justify-between m-3">
      <Image
        source={logo_Tinwin_Primary}
        className="h-12 w-16"
      />
      <Text className="text-orange-primary text-xl font-bold">
        Chúc bạn ngày mới vui vẻ!
      </Text>
    </View>
  );
};

export default HeaderHome;
