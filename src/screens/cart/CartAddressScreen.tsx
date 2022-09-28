import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {RadioButton} from 'react-native-paper';
import AddressContainer from '../../components/address/AddressContainer';
import BtnBorder from '../../components/BtnBorder';
import BtnPrimary from '../../components/BtnPrimary';
import HeaderStack from '../../components/HeaderStack';
import {NAVIGATE_ADD_NEW_ADDRESS} from '../../navigation/navigate';
import {dataAddress} from '../account/AddressScreen';

const CartAddressScreen: React.FC = () => {
  const [value, setValue] = useState(dataAddress[0].address);

  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <HeaderStack text="Địa chỉ nhận hàng" isGoback={true} />
      <ScrollView>
        <RadioButton.Group
          onValueChange={newValue => setValue(newValue)}
          value={value}>
          <AddressContainer data={dataAddress} setValue={setValue} />
        </RadioButton.Group>
      </ScrollView>
      <View className="m-3">
        <BtnPrimary text="Xác nhận" style="p-3 items-center" />
        <BtnBorder
          text="Thêm địa chỉ mới"
          style="p-3 items-center mt-3"
          onPress={() =>
            navigation.navigate(NAVIGATE_ADD_NEW_ADDRESS, {
              title: 'Địa chỉ giao hàng',
            })
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default CartAddressScreen;
