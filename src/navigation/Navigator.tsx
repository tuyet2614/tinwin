import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddressScreen from '../screens/account/AddressScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import Splash from '../screens/Splash';
import TabBar from './TabBar';
import AddNewAddressScreen from '../screens/account/AddNewAddressScreen';
import ProductDetailScreen from '../screens/ProductDetail/ProductDetailScreen';
import RatingScreen from '../screens/ProductDetail/RatingScreen';
import FilterScreen from '../screens/categories/FilterScreen';
import CartNavigator from '../screens/cart/CartNavigator';
import UpdateInfoScreen from '../screens/account/UpdateInfoScreen';

const Stack = createNativeStackNavigator();

const Navigator: React.FC = () => {
  const screenOptions = {
    headerShown: false,
  };
  const options = ({}) => ({
    headerShadowVisible: false,
    headerBackTitleVisible: false,
  });
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={screenOptions}
        />
        <Stack.Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={screenOptions}
        />
        <Stack.Screen
          name="OrderSuccess"
          component={OrderSuccess}
          options={options}
        />
        <Stack.Screen
          name="InternetBanking"
          component={InternetBanking}
          options={options}
        />
        <Stack.Screen name="Payment" component={Payment} options={options} />
        <Stack.Screen
          name="DebitCard"
          component={DebitCard}
          options={options}
        />
        <Stack.Screen
          name="DetailOrder"
          component={DetailOrder}
          options={options}
        />
        <Stack.Screen name="Cart" component={Cart} options={options} />
        <Stack.Screen
          name="TabBar"
          component={TabBar}
          options={screenOptions}
        />
        <Stack.Screen name="Review" component={Review} options={options} />
        <Stack.Screen
          name="Address"
          component={AddressScreen}
          options={screenOptions}
        />
        <Stack.Screen
          name="AddNewAddress"
          component={AddNewAddressScreen}
          options={screenOptions}
        />
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetailScreen}
          options={screenOptions}
        />
        <Stack.Screen
          name="Rating"
          component={RatingScreen}
          options={screenOptions}
        />
        <Stack.Screen
          name="Filter"
          component={FilterScreen}
          options={screenOptions}
        />
        <Stack.Screen
          name="CartNavigator"
          component={CartNavigator}
          options={screenOptions}
        />
        <Stack.Screen
          name="UpdateInfo"
          component={UpdateInfoScreen}
          options={screenOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
