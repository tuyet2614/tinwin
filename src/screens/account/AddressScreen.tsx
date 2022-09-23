import {SafeAreaView} from 'react-native';
import AddressContainer from '../../components/address/AddressContainer';
import HeaderStack from '../../components/HeaderStack';

const AddressScreen: React.FC = () => {
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
    </SafeAreaView>
  );
};

export default AddressScreen;
