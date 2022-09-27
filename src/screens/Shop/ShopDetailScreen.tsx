import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { useRoute } from '@react-navigation/native';
import { Image, SafeAreaView, Text, View } from 'react-native';
import { Rating } from 'react-native-ratings';
import CartBtn from '../../components/buttons/CartBtn';
import SearchBtnHome from '../../components/buttons/SearchBtnHome';
import SearchBtn from '../../components/buttons/SearchBtn';
import GoBackBtn from '../../components/buttons/GoBackBtn';
import FilterBtn from '../../components/buttons/FilterBtn';


const ShopDetailScreen: React.FC = () => {
    const route = useRoute();
    const { id } = route.params;

    return (
        <SafeAreaView className="bg-white h-full">
            <View>
                <View className="flex-row justify-between p-5 absolute z-10 w-full">
                    <GoBackBtn
                        style="py-3 px-6 bg-black-opacity rounded-lg w-10 items-center justify-center"
                        color="white"
                    />
                    <SearchBtnHome placeholder='Tìm kiếm' />
                    <View className="flex-row">
                        <FilterBtn color="white" style='text-white' />
                        <CartBtn
                            color="white"
                            style="bg-black-opacity p-3 rounded-lg ml-3 border-white"
                        />
                    </View>
                </View>
                <Image
                    source={require('../../assets/logoTinwinPrimary.png')}
                    className="w-full h-80 bg-blue-400"
                />

            </View>
        </SafeAreaView>
    );
};

export default ShopDetailScreen;
