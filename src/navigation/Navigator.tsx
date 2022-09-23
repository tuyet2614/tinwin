import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ForgotPassword from '../screens/Authentication/ForgotPassword';
import AddressScreen from '../screens/account/AddressScreen';
import Login from '../screens/Authentication/Login';
import OnboardingScreen from '../screens/OnboardingScreen';
import Register from '../screens/Authentication/Register';
import Splash from '../screens/Splash';
import LoginWithSMS from '../screens/Authentication/LoginWithSMS';
import OTP from '../screens/Authentication/OTPAuthen';
import FormForgotPassword from '../screens/Authentication/FormResetPassword';
import FormRegister from '../screens/Authentication/FormRegister';
import TabBar from './TabBar';
import Cart from '../screens/Cart/CartScreen';

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
        <Stack.Screen name="Login" component={Login} options={screenOptions} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="LoginSMS" component={LoginWithSMS} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="OTPAuthen" component={OTP} />
        <Stack.Screen name="FormResetPassword" component={FormForgotPassword} />
        <Stack.Screen name="FormRegister" component={FormRegister} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen
          name="TabBar"
          component={TabBar}
          options={screenOptions}
        />
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
