import {useNavigation} from '@react-navigation/native';
import {SafeAreaView, View} from 'react-native';
import AddressContainer from '../../components/address/AddressContainer';
import BtnPrimary from '../../components/BtnPrimary';
import HeaderStack from '../../components/HeaderStack';

const AddressScreen: React.FC = () => {
  const navigation = useNavigation();

  const data: object[] = [
    {
      id: 1,
      name: 'Long',
      phone: '012346789',
      address: 'ABC',
    },
    {
      id: 2,
      name: 'Tuyết',
      phone: '012346789',
      address: 'DEF',
    },
    {
      id: 3,
      name: 'Thái',
      phone: '012346789',
      address: 'XYZ',
    },
  ];

  return (
    <SafeAreaView className="bg-white h-full">
      <HeaderStack text="Địa chỉ giao hàng" isGoback={true} />

      <AddressContainer data={data} />

      <View className="m-3">
        <BtnPrimary
          text="Thêm địa chỉ mới"
          style="items-center p-3"
          onPress={() =>
            navigation.navigate('AddNewAddress', {title: 'Địa chỉ giao hàng'})
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default AddressScreen;
