import {faXmark} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  Image,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';
import BtnOrder from '../../components/buttons/BtnOrder';

export const ModalBuyAgain = ({modalVisible, setModalVisible}) => {
  const reverseModal = () => {
    setModalVisible(!modalVisible);
  };
  const false1 = () => {
    setModalVisible(false);
  };
  return (
    <SafeAreaView>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <TouchableOpacity
          style={{backgroundColor: 'rgba(90, 90, 90, 0.7)'}}
          className={`flex-1 `}
          onPress={false1}></TouchableOpacity>
        {/* <View
          className={`bg-white  shadow-xl rounded-t-lg pt-5`}> */}
        <View style={styles1.centeredView} className={`justify-end`}>
          <View style={styles1.modalView}>
            <ScrollView>
              <View style={styles1.flex}>
                <Text style={styles1.textAddToCart}>Thêm vào giỏ hàng</Text>
                <TouchableOpacity onPress={reverseModal}>
                  <FontAwesomeIcon
                    icon={faXmark}
                    size={14}
                    color="#000000"></FontAwesomeIcon>
                </TouchableOpacity>
              </View>
              <View style={styles1.boxP}>
                <Image source={require('../../assets/order/sting.png')}></Image>
                <View style={styles1.ml17}>
                  <Text style={styles1.textP}>
                    Thùng 24 Chai Nước Giải Khát Sting Vàng (330ml/chai)
                  </Text>
                  <View style={styles1.flexAlign}>
                    <Text style={styles1.code}>Mã SP: ASSDF</Text>
                    <Text style={styles1.x3}>x3</Text>
                  </View>
                </View>
              </View>
              <View style={styles1.boxP}>
                <Image
                  source={require('../../assets/order/sting.png')}
                  blurRadius={9}
                  style={styles1.borderRa}></Image>
                <Image
                  source={require('../../assets/order/soldOut.png')}
                  style={styles1.imgSoldOut}></Image>
                <View style={styles1.ml17}>
                  <Text style={styles1.titlePSoldOut}>
                    Thùng 24 Chai Nước Giải Khát Sting Vàng (330ml/chai)
                  </Text>
                  <View style={styles1.flexAlign}>
                    <Text style={styles1.codeSoldOut}>Mã SP: ASSDF</Text>
                    <Text style={styles1.x3SoldOut}>x3</Text>
                  </View>
                </View>
              </View>
              <View style={styles1.mt42}>
                <BtnOrder content={'Đồng ý'} style={styles1.wh76}></BtnOrder>
              </View>
            </ScrollView>
          </View>
        </View>
        {/* </View> */}
      </Modal>
    </SafeAreaView>
  );
};
const styles1 = StyleSheet.create({
  x3: {
    fontSize: 12,
    lineHeight: 14,
    fontWeight: '500',
    color: '#FC832D',
    marginRight: 70,
  },
  code: {
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 14,
    color: '#48484A',
  },
  textAddToCart: {
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 20,
    color: '#1F1F1F',
  },
  textP: {
    marginRight: 70,
    marginBottom: 5,
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 14,
    color: '#48484A',
  },
  boxP: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  codeSoldOut: {
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 14,
    color: '#bfbfc0',
  },
  x3SoldOut: {
    fontSize: 12,
    lineHeight: 14,
    fontWeight: '500',
    color: '#fecdab',
    marginRight: 70,
  },
  mt42: {marginTop: 42},
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    // marginTop: 22,
    height: '00%',
    width: '100%',
    borderStyle: 'solid',
    backgroundColor: 'rgba(90, 90, 90, 0.7)',
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
    height: '100%',
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
  wh76: {width: 76, height: 76},
  flexAlign: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titlePSoldOut: {
    marginRight: 70,
    marginBottom: 5,
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 14,
    color: '#bfbfc0',
  },
  ml17: {marginLeft: 17},
  borderRa: {borderRadius: 5},
  imgSoldOut: {position: 'absolute', top: 0},
  flex: {flexDirection: 'row', justifyContent: 'space-between'},
});
