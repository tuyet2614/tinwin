import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddressScreen from '../screens/account/AddressScreen';
import ForgotPassword from '../screens/Authentication/ForgotPassword';
import FormRegister from '../screens/Authentication/FormRegister';
import FormForgotPassword from '../screens/Authentication/FormResetPassword';
import Login from '../screens/Authentication/Login';
import LoginWithSMS from '../screens/Authentication/LoginWithSMS';
import OTP from '../screens/Authentication/OTPAuthen';
import Register from '../screens/Authentication/Register';
import OnboardingScreen from '../screens/OnboardingScreen';
import DebitCard from '../screens/Payment/DebitCard';
import InternetBanking from '../screens/Payment/InternetBanking';
import OrderSuccess from '../screens/Payment/OrderSuccess';
import Payment from '../screens/Payment/Payment';
import Splash from '../screens/Splash';
import Cart from '../screens/StatusOrder/CartScreen';
import DetailOrder from '../screens/StatusOrder/DetailOrder';
import Review from '../screens/StatusOrder/ReviewScreen';
import TabBar from './TabBar';

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
        <Stack.Screen name="Login" component={Login} options={screenOptions} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="LoginSMS" component={LoginWithSMS} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="OTPAuthen" component={OTP} />
        <Stack.Screen name="FormResetPassword" component={FormForgotPassword} />
        <Stack.Screen name="FormRegister" component={FormRegister} />
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
