import React, { useEffect, useState } from "react";
import {
    View,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Image,
} from "react-native";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'


interface TextFieldProps {
    width: number,
    placeholder: string,

}

export const SearchBar: React.FC<TextFieldProps> = ({
    width,
    placeholder = 'Tìm kiếm',

}) => {
    const [searchText, setSearchText] = useState('')

    return (

        <View className={`flex-row  h-[45px] py-3.5
        rounded-lg border-solid border-[1px] border-gray-200 px-3.5`}
            style={{ width: width }}
        >
            <FontAwesomeIcon icon={faMagnifyingGlass} color='#7B7B80' />
            <TextInput
                className={`pl-2`}
                placeholder={placeholder}
                autoCapitalize='none'
                onChangeText={(text) => setSearchText(text)}
            // value={searchText}
            />

        </View >



    )
}