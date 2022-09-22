import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ForgotPassword from '../screens/Authentication/ForgotPassword';
import Login from '../screens/Authentication/Login';
import OnboardingScreen from '../screens/OnboardingScreen';
import Register from '../screens/Authentication/Register';
import Splash from '../screens/Splash';
import LoginWithSMS from '../screens/Authentication/LoginWithSMS';

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
        <Stack.Screen name="Login" component={Login} options={screenOptions} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="LoginSMS" component={LoginWithSMS} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={screenOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
