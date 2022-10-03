import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { colors } from '../../assets/colors';
import CartBtn from '../../components/buttons/CartBtn';
import SearchBtnHome from '../../components/buttons/SearchBtnHome';
import CategoriesContainer from '../../components/categories/CategoriesContainer';
import HomeHeader from '../../components/home/HomeHeader';
import WalletCard from '../../components/home/WalletCard';
import ProductsContainer from '../../components/product/ProductsContainer';
import { Search_Screen } from '../../constant/route';

export const data = [
  {
    id: 1,
    image: logo_Tinwin_Primary,
    name: 'Tinwin',
    price: 200000,
    rating: 4,
  },
  {
    id: 2,
    image: logo_Tinwin_Primary,
    name: 'Tinwin',
    price: 600000,
    rating: 3.5,
  },
  {
    id: 3,
    image: logo_Tinwin_Primary,
    name: 'Tinwin',
    price: 100000,
    rating: 3.2,
  },
  {
    id: 4,
    image: logo_Tinwin_Primary,
    name: 'Tinwin',
    price: 120000,
    rating: 4.1,
  },
  {
    id: 5,
    image: logo_Tinwin_Primary,
    name: 'Tinwin',
    price: 50000,
    rating: 4.7,
  },
  {
    id: 6,
    image: logo_Tinwin_Primary,
    name: 'Tinwin',
    price: 400000,
    rating: 5,
  },
  {
    id: 7,
    image: logo_Tinwin_Primary,
    name: 'Tinwin',
    price: 200000,
    rating: 2.6,
  },
  {
    id: 8,
    image: logo_Tinwin_Primary,
    name: 'Tinwin',
    price: 100000,
    rating: 5,
  },
];


const HomeScreen: React.FC = () => {
  const navigation = useNavigation();
  const onPressRoute = () => {
    navigation.navigate(Search_Screen)
  }
  return (

    <SafeAreaView className="bg-white h-full">
      <HomeHeader />
      <View className="flex-row mx-3 mb-3">
        <SearchBtnHome />
        <CartBtn
          color={colors.primary}
          style="border border-gray-200 justify-center px-3 ml-3 rounded-lg"
        />
      </View>
      <ScrollView>
        <WalletCard />

        <CategoriesContainer
          textBtn=""
          flatlistStyle={[tw`flex-wrap`, { width: 500 }]}
          title="Ngành hàng"
          icon={Industry_icon}
          data={data}
        />

        <CategoriesContainer
          textBtn="Xem thêm"
          flatlistStyle={[tw`flex-wrap`, { width: 750 }]}
          title="Gian hàng nổi bật"
          icon={stall_icon}
          data={data}
        />

        <ProductsContainer
          textBtn="Xem thêm"
          data={data}
          title="Sản phẩm nổi bật"
          icon={outstanding_icon}
        />

        <ProductsContainer
          flatlistStyle={tw`justify-evenly`}
          textBtn="Xem thêm"
          data={data}
          title="Tìm kiếm hàng đầu"
          icon={Industry_icon}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;