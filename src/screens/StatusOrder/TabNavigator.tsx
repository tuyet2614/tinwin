import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useNavigation} from '@react-navigation/native';
import {useLayoutEffect} from 'react';
import {Dimensions, Text} from 'react-native';
import Cancel from './CancelledTab';
import Delivered from './DeliveredTab';
import Delivering from './DeliveringTab';
import Prepare from './PrepareTab';
import WaitComfirm from './WaitComfirmTab';
import WaitPay from './WaitForPayTab';

const Tab = createMaterialTopTabNavigator();
const TabNavi: React.FC = ({}) => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Đơn mua',
      headerStyle: {backgroundColor: '#fff', borderBottomWidth: 0},
      headerTitleStyle: {color: '#000'},
      headerTintColor: '#000',
    });
  }, [navigation]);
  return (
    <Tab.Navigator
      initialRouteName="WaitForPay"
      screenOptions={{tabBarScrollEnabled: true}}
      tabBarOptions={{
        style: {
          backgroundColor: 'white',
          paddingLeft: 15,
          //   paddingHorizontal: 25,
          //   width: '15%',
        },
        indicatorStyle: {
          //   borderBottomColor: colorScheme.teal,
          borderBottomWidth: 3,
          width: 97,
          left: 24,
          borderColor: '#FC832D',
          zIndex: 1000,
        },
        tabStyle: {
          justifyContent: 'center',
          width: Dimensions.get('window').width / 3.45,
          //   borderBottomWidth: 2,
          //   borderColor: '#D7D7D7',
          //   borderWidth: Dimensions.get('window').width / 0.9,
          //   right: 24,
          //   left: 24,
        },
      }}>
      <Tab.Screen
        name="WaitForPay"
        component={WaitPay}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                fontSize: 12,
                fontWeight: '500',
                lineHeight: 14,
                color: focused ? '#FC832D' : '#636366',
                flexWrap: 'nowrap',
              }}>
              {' '}
              Chờ thanh toán{' '}
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="WaitComfirm"
        component={WaitComfirm}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                fontSize: 12,
                fontWeight: '500',
                lineHeight: 14,
                color: focused ? '#FC832D' : '#636366',
              }}>
              {' '}
              Chờ xác nhận{' '}
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Prepare"
        component={Prepare}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                fontSize: 12,
                fontWeight: '500',
                lineHeight: 14,
                color: focused ? '#FC832D' : '#636366',
              }}>
              {' '}
              Đang chuẩn bị{' '}
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Delivering"
        component={Delivering}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                fontSize: 12,
                fontWeight: '500',
                lineHeight: 14,
                color: focused ? '#FC832D' : '#636366',
              }}>
              {' '}
              Đang giao{' '}
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Delivered"
        component={Delivered}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                fontSize: 12,
                fontWeight: '500',
                lineHeight: 14,
                color: focused ? '#FC832D' : '#636366',
              }}>
              {' '}
              Đã giao{' '}
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Cancel"
        component={Cancel}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                fontSize: 12,
                fontWeight: '500',
                lineHeight: 14,
                color: focused ? '#FC832D' : '#636366',
              }}>
              {' '}
              Đã hủy{' '}
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavi;
