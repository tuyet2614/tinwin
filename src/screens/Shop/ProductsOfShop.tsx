import {
  SafeAreaView,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import SortOption from '../../components/sortOption/sortOption';
import ProductsContainer from '../../components/product/ProductsContainer';
// import { data } from '../../Data/Data';
import {useState} from 'react';
import {getProductOfShop} from '../../hooks/shops/useGetShops';
import {faArrowUp} from '@fortawesome/free-solid-svg-icons';
import {faArrowDown} from '@fortawesome/free-solid-svg-icons';

const sortLabel = [
  {id: 1, title: 'Mới nhất'},
  {id: 2, title: 'Bán chạy', style: 'border-x'},
  {id: 3, title: 'Giá', icon: {icon1: faArrowUp, icon2: faArrowDown}},
];
interface Props {
  id: string;
}

const ProductsOfShop: React.FC<Props> = props => {
  const {id} = props;
  const data = getProductOfShop(id);
  return (
    <SafeAreaView className={`bg-white flex-1`}>
      <View>
        <SortOption label={sortLabel} data={data} />
      </View>
    </SafeAreaView>
  );
};

export default ProductsOfShop;
