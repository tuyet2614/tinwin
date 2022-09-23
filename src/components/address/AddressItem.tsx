import {faClose, faEllipsisVertical} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useState} from 'react';
import {Image, Modal, Text, TouchableOpacity, View} from 'react-native';

interface Props {
  name: string;
  phone: string;
  address: string;
}

const AddressItem: React.FC<Props> = (props: Props) => {
  const {name, phone, address} = props;

  console.log(props);
  const [optionsVisible, setOptionsVisible] = useState(false);

  return (
    <View style={{zIndex: 1}}>
      <TouchableOpacity className="flex-row p-5 justify-between relative">
        <View className="flex-row">
          <Image
            source={require('../../assets/icons/account/location.png')}
            className="m-3 h-6 w-6"
          />
          <View>
            <Text className="font-bold text-xl text-black">{name}</Text>
            <Text>{phone}</Text>
            <Text>{address}</Text>
          </View>
        </View>

        <TouchableOpacity onPress={() => setOptionsVisible(!optionsVisible)}>
          <FontAwesomeIcon icon={faEllipsisVertical} size={25} />
        </TouchableOpacity>
      </TouchableOpacity>

      <View className="h-1.5 bg-gray-100"></View>

      {optionsVisible && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={optionsVisible}>
          <TouchableOpacity
            className="bg-black-opacity h-full"
            onPress={() => setOptionsVisible(false)}></TouchableOpacity>
          <View
            className="bg-white w-full rounded-lg absolute self-center bottom-0 justify-evenly"
            style={{elevation: 10}}>
            <View className="flex-row items-center justify-between px-3 py-5">
              <Text className="text-xl text-black">Tuỳ chọn</Text>
              <TouchableOpacity onPress={() => setOptionsVisible(false)}>
                <FontAwesomeIcon icon={faClose} size={20} />
              </TouchableOpacity>
            </View>
            <View className="h-0.5 bg-gray-200 mb-2"></View>
            <View className="m-3 h-3/4 justify-evenly">
              <TouchableOpacity className="p-3 border-orange-primary border-2 rounded-lg">
                <Text className="text-orange-primary">Đặt làm mặc định</Text>
              </TouchableOpacity>
              <TouchableOpacity className="p-3 border-orange-primary border-2 rounded-lg">
                <Text className="text-orange-primary">Chỉnh sửa</Text>
              </TouchableOpacity>
              <TouchableOpacity className="p-3 border-orange-primary border-2 rounded-lg">
                <Text className="text-orange-primary">Xoá</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

export default AddressItem;
