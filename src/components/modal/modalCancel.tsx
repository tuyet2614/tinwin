import {faXmark} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  Alert,
  Image,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import BtnOrder from '../../components/buttons/BtnOrder';
import {RadioButton} from '../../components/buttons/RadioButton';

export const ModalPoup = ({modalVisible, setModalVisible}) => {
  return (
    <View style={styles1.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}
        supportedOrientations="portrait-upside-down">
        <View style={styles1.centeredView}>
          <Pressable style={styles1.modalView}>
            <ScrollView>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text
                  style={{
                    fontWeight: '700',
                    fontSize: 16,
                    lineHeight: 20,
                    color: '#1F1F1F',
                    marginBottom: 20,
                  }}>
                  Chọn lí do hủy
                </Text>
                <TouchableOpacity
                  onPress={() => setModalVisible(!modalVisible)}>
                  <FontAwesomeIcon
                    icon={faXmark}
                    size={14}
                    color="#000000"></FontAwesomeIcon>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  //   flex: 1,
                  borderWidth: 1,
                  borderColor: '#fecfad',
                  height: 78,
                  backgroundColor: '#fff3ea',
                  paddingBottom: 11,
                  paddingTop: 11,
                  paddingLeft: 14,
                  borderRadius: 8,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../../assets/order/warning.png')}
                  style={{width: 24, height: 24}}
                />
                <Text
                  style={{
                    marginLeft: 13,
                    fontWeight: '400',
                    fontSize: 12,
                    lineHeight: 18,
                    color: '#FC832D',
                    marginRight: 40,
                  }}>
                  Vui lòng chọn lý do huỷ. Với lý do này, bạn sẽ huỷ tất cả sản
                  phẩm trong đơn hàng và không thể thay đổi sau đó
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  marginTop: 19,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <RadioButton selected={true} />
                <Text
                  style={{
                    marginLeft: 9,
                    fontWeight: '500',
                    fontSize: 14,
                    lineHeight: 22,
                    color: '#3A3A3C',
                  }}>
                  Muốn thay đổi địa chỉ giao hàng
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  marginTop: 19,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <RadioButton selected={true} />
                <Text
                  style={{
                    marginLeft: 9,
                    fontWeight: '500',
                    fontSize: 14,
                    lineHeight: 22,
                    color: '#3A3A3C',
                  }}>
                  Muốn thay đổi sản phẩm trong đơn hàng{' '}
                  <Text>(size, màu sắc, số lượng,...)</Text>
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  marginTop: 19,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <RadioButton selected={true} />
                <Text
                  style={{
                    marginLeft: 9,
                    fontWeight: '500',
                    fontSize: 14,
                    lineHeight: 22,
                    color: '#3A3A3C',
                  }}>
                  Thủ tục thanh toán quá rắc rối
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  marginTop: 19,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <RadioButton selected={true} />
                <Text
                  style={{
                    marginLeft: 9,
                    fontWeight: '500',
                    fontSize: 14,
                    lineHeight: 22,
                    color: '#3A3A3C',
                  }}>
                  Tìm thấy giá rẻ hơn ở chỗ khác
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  marginTop: 19,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <RadioButton selected={true} />
                <Text
                  style={{
                    marginLeft: 9,
                    fontWeight: '500',
                    fontSize: 14,
                    lineHeight: 22,
                    color: '#3A3A3C',
                  }}>
                  Đổi ý, không muốn mua nữa
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  marginTop: 19,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <RadioButton selected={true} />
                <Text
                  style={{
                    marginLeft: 9,
                    fontWeight: '500',
                    fontSize: 14,
                    lineHeight: 22,
                    color: '#3A3A3C',
                  }}>
                  Lý do khác
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  marginTop: 19,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <RadioButton selected={true} />
                <Text
                  style={{
                    marginLeft: 9,
                    fontWeight: '500',
                    fontSize: 14,
                    lineHeight: 22,
                    color: '#3A3A3C',
                  }}>
                  Muốn thay đổi địa chỉ giao hàng
                </Text>
              </TouchableOpacity>
              <TextInput
                style={styles1.input}
                // value={userName}
                placeholder="Nhập lí do cụ thể ở đây"
                // onChange={text => setUserName(text)}
                numberOfLines={4}
                multiline={true}
              />
              <BtnOrder content={'Hoàn thành'}></BtnOrder>
            </ScrollView>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
};
const styles1 = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    // marginTop: 22,
    height: '00%',
    width: '100%',
    borderStyle: 'solid',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    elevation: 20,
    // padding: 10,
    // borderRadius: 4,
  },
  modalView: {
    // margin: 20,
    backgroundColor: 'white',
    // borderRadius: 20,
    padding: 28,
    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '100%',
    height: '60%',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    // width: 327,
    flex: 1,
    // alignItems: 'baseline',
    minHeight: 182,
    borderColor: '#0000001F',
    borderRadius: 10,
    padding: 20,
    borderWidth: 1,
    borderStyle: 'solid',
    marginBottom: 30,
    marginTop: 9,
  },
});
