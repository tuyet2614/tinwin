
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Platform, SafeAreaView, Text, View } from 'react-native';

import HotSale from '../screens/Filter/HotSale';
import Name from '../screens/Filter/Name';
import Price from '../screens/Filter/Price';


const TabBar: React.FC = () => {
    const Tab = createMaterialTopTabNavigator();

    const screenOptions = ({ route }) => ({


        tabBarIndicatorStyle: {
            backgroundColor: '#FC832D',
        },
        tabBarActiveTintColor: '#636366',
        tabBarStyle: {
            tabBarActiveTintColor: '#636366',
            marginLeft: 10,
            marginRight: 10,

        },
        tabBarOptions: {
            keyboardHidesTabBar: true,

            style: {
                color: "#f20",
            }
        },


    });

    return (
        <View className={`flex-1 h-screen`}>

            <Tab.Navigator screenOptions={screenOptions}>
                <Tab.Screen name="Bán chạy" component={HotSale} />
                <Tab.Screen name="Giá" component={Price} />
                <Tab.Screen name="Tên A→Z" component={Name} />
            </Tab.Navigator>
        </View>

    );
};

export default TabBar;
