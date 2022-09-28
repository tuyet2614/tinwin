import {faPen} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/native';
import {Image, Text, TouchableOpacity, View} from 'react-native';

const AccountInfo: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View className="flex-row p-5">
      <TouchableOpacity
        className="relative mr-5 h-16"
        onPress={() => navigation.navigate('ChangeInfo')}>
        <Image
          className="h-16 w-16 rounded-full"
          source={require('../../assets/logoTinwinPrimary.png')}
        />

        <View
          className={`absolute bg-orange-primary h-6 w-6 bottom-0 right-0 rounded-full items-center justify-center`}>
          <FontAwesomeIcon icon={faPen} color="white" size={10} />
        </View>
      </TouchableOpacity>
      <View className="">
        <Text className="uppercase text-black font-bold">Pham Quang Long</Text>
        <View
          className={`bg-orange-primary w-24 items-center p-1 rounded-full`}>
          <Text className="text-white text-xs">Khách hàng</Text>
        </View>
        <Text className="py-2">0123456789</Text>

        <TouchableOpacity>
          <Text className="text-blue-600 text-xs pb-2">
            Bổ sung thông tin email
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AccountInfo;
