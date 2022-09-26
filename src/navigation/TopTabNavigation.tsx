import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import SearchScreen from '../screens/Search/SearchScreen';
import HomeScreen from '../screens/home/HomeScreen';
import TopBar from './TopBar';
import { NavigationContainer } from '@react-navigation/native';

import { SafeAreaView, } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Tab = createMaterialTopTabNavigator();

const TopTabNavigation: React.FC = () => {
    return (

        <TopBar />


    );
}

export default TopTabNavigation
