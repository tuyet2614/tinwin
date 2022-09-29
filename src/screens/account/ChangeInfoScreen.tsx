import {faPen} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useState} from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../assets/colors';
import AccountContainer from '../../components/account/AccountContainer';
import HeaderStack from '../../components/HeaderStack';
import UpdateAvatarModal from '../../components/updateAvatar/UpdateAvatarModal';

const ChangeInfoScreen: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const showModal = () => {
    setModalVisible(true);
  };

  return (
    <SafeAreaView className="bg-white h-full">
      <HeaderStack text="Sửa hồ sơ" isGoback={true} textBtnRight="Lưu" />

      <TouchableOpacity
        className="relative items-center my-5"
        onPress={showModal}>
        <Image
          className="h-44 w-44 rounded-full"
          source={require('../../assets/logoTinwinPrimary.png')}
        />
        <View className="absolute items-center items-center justify-center h-full">
          <FontAwesomeIcon icon={faPen} color={colors.primary} />
          <Text className="text-orange-primary text-xs mt-3">
            Chạm để thay đổi
          </Text>
        </View>
      </TouchableOpacity>

      <AccountContainer
        items={[
          {
            text: 'Tên hiển thị',
            icon: require('../../assets/icons/changeInfo/account.png'),
            textRight: 'abc',
          },
          {
            text: 'Giới tính',
            icon: require('../../assets/icons/changeInfo/gender.png'),
            textRight: 'abc',
          },
          {
            text: 'Ngày sinh',
            icon: require('../../assets/icons/changeInfo/dob.png'),
            textRight: 'abc',
          },
          {
            text: 'Điện thoại',
            icon: require('../../assets/icons/changeInfo/phone.png'),
            textRight: '0123456789',
          },
          {
            text: 'Email',
            icon: require('../../assets/icons/changeInfo/email.png'),
            textRight: 'abc',
          },
        ]}
      />

      <View>
        <View className="h-2 bg-gray-100"></View>
        <AccountContainer
          items={[
            {
              text: 'Thay đổi mật khẩu',
              icon: require('../../assets/icons/changeInfo/lock.png'),
            },
          ]}
        />
      </View>

      <UpdateAvatarModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </SafeAreaView>
  );
};

export default ChangeInfoScreen;
