import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
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
          name="TabBar"
          component={TabBar}
          options={screenOptions}
        />
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={screenOptions}
        />
        <Stack.Screen
          name="SearchResult"
          component={SearchResultScreen}
          options={screenOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
