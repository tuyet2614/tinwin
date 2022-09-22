import {Dispatch, SetStateAction} from 'react';
import {Alert, Modal, SafeAreaView, TouchableOpacity, View} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import ModalBtn from './ModalBtn';

interface Props {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<any>>;
}

const UpdateAvatarModal: React.FC<Props> = (props: Props) => {
  const {modalVisible, setModalVisible} = props;

  return (
    <SafeAreaView>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <TouchableOpacity
          className={`flex-1`}
          onPress={() => {
            setModalVisible(false);
          }}></TouchableOpacity>
        <View
          className={`bg-white justify-end pb-20 shadow-xl rounded-t-lg pt-5`}>
          <ModalBtn
            text="Chọn ảnh từ thư viện"
            onPress={() => {
              launchImageLibrary(
                {
                  mediaType: 'photo',
                },
                response => {
                  if (response.didCancel != true) {
                    // dispatchSetUserInfo({
                    //   ...userInfo,
                    //   avatar: response.assets[0].uri,
                    // });
                    setModalVisible(false);
                  }
                },
              );
            }}
          />
          <ModalBtn
            text="Chụp ảnh"
            onPress={() => {
              launchCamera(
                {
                  cameraType: 'back',
                  saveToPhotos: true,
                },
                response => {
                  if (response.errorCode !== undefined) {
                    Alert.alert(response.errorCode);
                  } else if (response.didCancel != true) {
                    // dispatchSetUserInfo({
                    //   ...userInfo,
                    //   avatar: response.assets[0].uri,
                    // });
                    setModalVisible(false);
                  }
                },
              );
            }}
          />
          <ModalBtn
            text="Thoát"
            onPress={() => {
              setModalVisible(false);
            }}
          />
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default UpdateAvatarModal;
