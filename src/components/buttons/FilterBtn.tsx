import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {NAVIGATE_FILTER} from '../../navigation/navigate';
import FilterModal from '../categories/FilterModal';

const FilterBtn: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View className="">
      <TouchableOpacity
        onPress={() => navigation.navigate(NAVIGATE_FILTER)}
        className={`border border-gray-200 justify-center px-4 py-3 ml-3 rounded-lg`}>
        <Image source={require('../../assets/icons/filter.png')} />
      </TouchableOpacity>

      {/* <FilterModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      /> */}
    </View>
  );
};

export default FilterBtn;
