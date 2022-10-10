import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React, { useState } from 'react';
import ProductsContainer from '../product/ProductsContainer';
import { Platform, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';

interface Props {
    data: object[]
    label: object[]
}

const sortLabel = [
    { id: 1, title: "Mới nhất" },
    { id: 2, title: "Bán chạy", },
    { id: 3, title: "Giá" }
]

const SortOption: React.FC<Props> = (props) => {
    const { data, label } = props
    console.log("check route: ", data)

    const [status, setStatus] = useState('Mới nhất')
    const setStatusFilter = (item: string) => {
        setStatus(item)
    }

    return (
        <View>
            <View className={`flex-row px-6 mt-6`}>
                {label.map(item =>
                    <TouchableOpacity
                        className={`w-28 items-center ${item.style}`}
                        key={item.id}
                        onPress={() => { setStatusFilter(item.title) }}>
                        <Text className={`${status === item.title ? 'text-[#FC832D]' : 'text-[#48484A]'}`}>{item.title}</Text>
                    </TouchableOpacity>)}
            </View>
            <View>
                <ProductsContainer
                    flatlistStyle={{ justifyContent: 'space-evenly' }}
                    data={data}

                />
            </View>
        </View>



    )
}

export default SortOption