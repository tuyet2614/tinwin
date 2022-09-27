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
import Cart from '../screens/StatusOrder/CartScreen';
import Review from '../screens/StatusOrder/ReviewScreen';
import DetailOrder from '../screens/StatusOrder/DetailOrder';

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
        <Stack.Screen
          name="DetailOrder"
          component={DetailOrder}
          options={({}) => ({
            headerShadowVisible: false,
            headerBackTitleVisible: false,
            // cardStyle: {backgroundColor: '#fff'},
          })}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={({}) => ({
            headerShadowVisible: false,
            headerBackTitleVisible: false,
            // cardStyle: {backgroundColor: '#fff'},
          })}
        />
        <Stack.Screen
          name="TabBar"
          component={TabBar}
          options={screenOptions}
        />
        <Stack.Screen
          name="Review"
          component={Review}
          options={({}) => ({
            headerShadowVisible: false, // applied here
            headerBackTitleVisible: false,
            // cardStyle: {backgroundColor: '#fff'},
          })}
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
