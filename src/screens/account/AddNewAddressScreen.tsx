import {SafeAreaView, Text, View} from 'react-native';
import AccountItem from '../../components/account/AccountItem';
import HeaderStack from '../../components/HeaderStack';
import InputItem from '../../components/InputItem';

const AddNewAddressScreen: React.FC = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <HeaderStack text="Địa chỉ giao hàng" isGoback={true} />

      <View className="bg-gray-100 py-2 px-5">
        <Text className="text-black font-bold">Liên hệ</Text>
      </View>

      <View className="mx-5">
        <InputItem
          style="mt-5"
          placeholder="Nhập họ và tên người nhận"
          title="Tên người nhận"
        />
        <InputItem
          style="mt-5"
          placeholder="Nhập số điện thoại nhận hàng"
          title="Số điện thoại"
        />
      </View>

      <View className="bg-gray-100 py-2 px-5 mt-10">
        <Text className="text-black font-bold">Địa chỉ</Text>
      </View>
      <View className="">
        <Text className="my-2 mt-5 mx-4">
          Địa chỉ cụ thể
          <Text className="text-red-danger">*</Text>
        </Text>
        <AccountItem text="Chọn địa chỉ" />
      </View>
    </SafeAreaView>
  );
};

export default AddNewAddressScreen;
