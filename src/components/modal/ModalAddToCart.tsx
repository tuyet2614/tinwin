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
  TouchableOpacity,
  View,
} from 'react-native';
import BtnOrder from '../../components/buttons/BtnOrder';

export const ModalBuyAgain = ({modalVisible, setModalVisible}) => {
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
                  }}>
                  Thêm vào giỏ hàng
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
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 20,
                }}>
                <Image source={require('../../assets/order/sting.png')}></Image>
                <View style={{marginLeft: 17}}>
                  <Text
                    style={{
                      marginRight: 50,
                      marginBottom: 5,
                      fontWeight: '500',
                      fontSize: 12,
                      lineHeight: 14,
                      color: '#48484A',
                    }}>
                    Thùng 24 Chai Nước Giải Khát Sting Vàng (330ml/chai)
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontWeight: '400',
                        fontSize: 12,
                        lineHeight: 14,
                        color: '#48484A',
                      }}>
                      Mã SP: ASSDF
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
                        lineHeight: 14,
                        fontWeight: '500',
                        color: '#FC832D',
                        marginRight: 50,
                      }}>
                      x3
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 20,
                }}>
                <Image
                  source={require('../../assets/order/sting.png')}
                  blurRadius={9}
                  style={{borderRadius: 5}}></Image>
                <Image
                  source={require('../../assets/order/soldOut.png')}
                  style={{position: 'absolute', top: 0}}></Image>
                <View style={{marginLeft: 17}}>
                  <Text
                    style={{
                      marginRight: 50,
                      marginBottom: 5,
                      fontWeight: '500',
                      fontSize: 12,
                      lineHeight: 14,
                      color: '#bfbfc0',
                    }}>
                    Thùng 24 Chai Nước Giải Khát Sting Vàng (330ml/chai)
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontWeight: '400',
                        fontSize: 12,
                        lineHeight: 14,
                        color: '#bfbfc0',
                      }}>
                      Mã SP: ASSDF
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
                        lineHeight: 14,
                        fontWeight: '500',
                        color: '#fecdab',
                        marginRight: 50,
                      }}>
                      x3
                    </Text>
                  </View>
                </View>
              </View>
              <View style={{marginTop: 42}}>
                <BtnOrder
                  content={'Đồng ý'}
                  style={{width: 76, height: 76}}></BtnOrder>
              </View>
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
