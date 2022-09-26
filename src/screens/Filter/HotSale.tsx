import { SafeAreaView, Text, ScrollView, View } from 'react-native';
import ProductsContainer from '../../components/product/ProductsContainer';

export const data = [
    {
        id: 1,
        image: require('../../assets/logoTinwinPrimary.png'),
        name: 'Tinwin',
        price: '200.000đ',
        rating: 4,
    },
    {
        id: 2,
        image: require('../../assets/logoTinwinPrimary.png'),
        name: 'Tinwin',
        price: '600.000đ',
        rating: 3.5,
    },
    {
        id: 3,
        image: require('../../assets/logoTinwinPrimary.png'),
        name: 'Tinwin',
        price: '100.000đ',
        rating: 3.2,
    },
    {
        id: 4,
        image: require('../../assets/logoTinwinPrimary.png'),
        name: 'Tinwin',
        price: '120.000đ',
        rating: 4.1,
    },
    {
        id: 5,
        image: require('../../assets/logoTinwinPrimary.png'),
        name: 'Tinwin',
        price: '50.000đ',
        rating: 4.7,
    },
    {
        id: 6,
        image: require('../../assets/logoTinwinPrimary.png'),
        name: 'Tinwin',
        price: '400.000đ',
        rating: 5,
    },
    {
        id: 7,
        image: require('../../assets/logoTinwinPrimary.png'),
        name: 'Tinwin',
        price: '200.000đ',
        rating: 2.6,
    },
    {
        id: 8,
        image: require('../../assets/logoTinwinPrimary.png'),
        name: 'Tinwin',
        price: '100.000đ',
        rating: 5,
    },
];


const HotSale: React.FC = () => {
    return (
        <ScrollView className="bg-white h-full">
            <View >
                <ProductsContainer
                    flatlistStyle={{ justifyContent: 'space-evenly' }}
                    data={data}
                />
            </View>

        </ScrollView>
    );
};

export default HotSale;
