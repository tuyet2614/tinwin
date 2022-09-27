import {useState} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import CartBtn from '../../components/buttons/CartBtn';
import FilterBtn from '../../components/buttons/FilterBtn';
import SearchBtnHome from '../../components/buttons/SearchBtnHome';
import CategoriesContainer from '../../components/categories/CategoriesContainer';
import ProductsContainer from '../../components/product/ProductsContainer';
import {data} from '../home/HomeScreen';

const CategoriesScreen: React.FC = () => {
  return (
    <SafeAreaView className="bg-white mb-20 h-full">
      <View className="flex-row mx-3 my-2">
        <SearchBtnHome />
        <FilterBtn />
        <CartBtn
          color="#FD7D00"
          style="border border-gray-200 justify-center px-3 ml-3 rounded-lg"
        />
      </View>
      <ScrollView>
        <CategoriesContainer
          flatlistStyle={{
            num: 3,
            justifyContent: 'space-around',
          }}
          data={data}
          icon={require('../../assets/icons/home/industry.png')}
          textBtn=""
          title="Ngành hàng"
        />

        <ProductsContainer
          flatlistStyle={{
            justifyContent: 'space-evenly',
          }}
          data={data}
          icon={require('../../assets/icons/home/industry.png')}
          textBtn="Xem thêm"
          title="Tìm kiếm hàng đầu"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default CategoriesScreen;
