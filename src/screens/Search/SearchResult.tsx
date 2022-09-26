import React, { useState } from 'react';
import { SafeAreaView, Text, Image, View, TouchableOpacity, StyleSheet, FlatList, ListRenderItem } from 'react-native';
import { SearchBar } from '../../components/SearchField';
import { Categories } from '../../assets/Data';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';
import FilterBtn from '../../components/buttons/FilterBtn';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const DATA = [
    { id: 'a', title: 'Nước tăng lực', icon: require('../../images/cancel.png') },
    { id: 'b', title: 'Chăm sóc cá nhân', icon: require('../../images/cancel.png') },
    { id: 'c', title: 'Coca cola', icon: require('../../images/cancel.png') }
];



interface tagSearch {
    id: string,
    title: string
}



const Item: React.FC<tagSearch> = (item) => (

    <View className={`h-[30px] rounded-lg bg-[#FC832D]/[0.1] justify-center items-center mt-3 mr-3 flex-row px-3`}>
        <Text className={`text-[#FC832D] text-sm font-normal`}>{item.title}</Text>
        <View className={`ml-2`}>
            <TouchableOpacity >
                <FontAwesomeIcon icon={faXmark} size={15} color={'#FC832D'} />
            </TouchableOpacity>
        </View>
    </View>

)

const SearchResult: React.FC = () => {
    const [search, setSearch] = useState('')
    const navigation = useNavigation()

    const renderItem: ListRenderItem<tagSearch> = (item) => {
        return (
            <Item title={item.item.title} id={item.item.id} />
        )
    }
    return (
        <SafeAreaView>
            <View className={`px-6`}>
                <View className={`flex-row`}>
                    <View className={'self-center mr-4'}>
                        <TouchableOpacity onPress={() => { navigation.goBack() }}>
                            <FontAwesomeIcon color='#1F1F1F' icon={faChevronLeft} />
                        </TouchableOpacity>

                    </View>

                    <SearchBar placeholder='Tìm kiếm' width={200} />
                    <View>
                        <FilterBtn />
                    </View>

                    <View className={' ml-2 border-[1px] w-[45px] h-[45px] rounded-lg justify-center items-center'}>
                        <Image source={require('../../images/cart.png')} />
                    </View>
                    <View>

                    </View>

                </View>

                <View className={`ml-3`}>
                    <FlatList
                        data={DATA}
                        renderItem={renderItem}
                        numColumns={2}

                    />

                </View>

            </View>

        </SafeAreaView>
    );
};

export default SearchResult;

