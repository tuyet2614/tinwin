import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import SearchScreen from '../screens/Search/SearchScreen';
import HomeScreen from '../screens/home/HomeScreen';
import TopBar from './TopBar';
import { NavigationContainer } from '@react-navigation/native';

import { SafeAreaView, } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View } from 'react-native';

const Tab = createMaterialTopTabNavigator();

const TopTabNavigation: React.FC = () => {
    return (
       <View style={{ flexDirection: 'row', paddingTop: 20 }}>

       </View>
    )
}

export default TopTabNavigation
