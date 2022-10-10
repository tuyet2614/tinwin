import { SafeAreaView, Text, Touchable, TouchableOpacity, View } from 'react-native';
import SortOption from '../../components/sortOption/sortOption';
import ProductsContainer from '../../components/product/ProductsContainer';
// import { data } from '../../Data/Data';
import { useState } from 'react';
import { getProductOfShop } from '../../hooks/shops/useGetShops';

const sortLabel = [
    { id: 1, title: "Mới nhất" },
    { id: 2, title: "Bán chạy" },
    { id: 3, title: "Giá" }

]
interface Props {
    id: string
}

const ProductsOfShop: React.FC<Props> = (props) => {
    const { id } = props
    const data = getProductOfShop('9fe2f64f-9a1d-6f4e-9dec-3a06337aaf58')
    console.log('check: ', data.items)

    return (
        <SafeAreaView className={`bg-white flex-1`}>
            <View>
                <SortOption label={sortLabel} data={data.items} />
            </View>

        </SafeAreaView>
    );
};

export default ProductsOfShop;
