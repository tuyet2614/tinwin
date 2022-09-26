import Slider from '@react-native-community/slider';
import {useState} from 'react';
import {
  Image,
  Modal,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import RnRangeSlider from 'rn-range-slider';
import BtnBorder from '../BtnBorder';
import BtnPrimary from '../BtnPrimary';
import FilterContainer from '../FilterContainer';
import InputItem from '../InputItem';
import CloseBtn from './CloseBtn';

const FilterBtn: React.FC = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [showCategoriesFilter, setShowCategoriesFilter] =
    useState<boolean>(false);
  const [showSupplierFilter, setShowSupplierFilter] = useState<boolean>(false);
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(5000000);

  return (
    <View>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        className={`border border-gray-200 justify-center px-4 py-3 ml-3 rounded-lg`}>
        <Image source={require('../../assets/icons/filter.png')} />
      </TouchableOpacity>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <SafeAreaView>
          <View className="h-full bg-white p-3">
            <View className="flex-row items-center justify-between">
              <Text className="text-lg font-bold text-black">
                Bộ lọc tìm kiếm
              </Text>
              <CloseBtn onPress={() => setModalVisible(false)} />
            </View>

            <ScrollView className="flex-1">
              <FilterContainer
                onPress={() => setShowCategoriesFilter(!showCategoriesFilter)}
                title="Theo danh mục"
                showFilter={showCategoriesFilter}
              />

              <FilterContainer
                onPress={() => setShowSupplierFilter(!showSupplierFilter)}
                title="Theo nhà cung cấp"
                showFilter={showSupplierFilter}
              />

              <View>
                <Text className="text-black font-bold my-5">Giới hạn giá</Text>
                <View className="flex-row items-center w-full">
                  <InputItem
                    placeholder="Tối thiểu"
                    style="flex-1"
                    keyboardType="number-pad"
                  />
                  <Text className="mx-3">-</Text>
                  <InputItem
                    setValue={setMaxPrice}
                    value={maxPrice.toString()}
                    placeholder="Tối đa"
                    style="flex-1"
                    keyboardType="number-pad"
                  />
                </View>
                <RnRangeSlider
                  min={5000}
                  max={5000000}
                  step={20000}
                  onValueChanged={(low, high, fromUser) => {
                    setMinPrice(low);
                    setMaxPrice(high);
                  }}
                  renderThumb={() => (
                    <View className="w-4 h-4 rounded-full bg-orange-primary"></View>
                  )}
                  renderRail={() => (
                    <View className="h-0.5 flex-1 rounded-lg bg-gray-400"></View>
                  )}
                  renderRailSelected={() => (
                    <View className="h-0.5 rounded-lg bg-orange-primary"></View>
                  )}
                  renderLabel={value => <Text>{value}</Text>}
                  renderNotch={() => <View></View>}
                />
                <Slider
                  onValueChange={value => setMaxPrice(value)}
                  style={{height: 40}}
                  minimumValue={0}
                  step={20000}
                  maximumValue={5000000}
                  minimumTrackTintColor="#FD7D00"
                  maximumTrackTintColor="#000000"
                />
                <View className="flex-row justify-between">
                  <Text>{minPrice}</Text>
                  <Text>{maxPrice}</Text>
                </View>
              </View>
            </ScrollView>
            <View className="flex-row">
              <BtnBorder
                text="Thiết lập lại"
                style="p-3 flex-1 items-center mr-3"
              />
              <BtnPrimary
                text="Áp dụng"
                style="justify-center px-16 items-center flex-1"
              />
            </View>
          </View>
        </SafeAreaView>
      </Modal>
    </View>
  );
};

export default FilterBtn;
