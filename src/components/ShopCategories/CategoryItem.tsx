import { View, TouchableOpacity, Image, Text } from "react-native"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"

interface category {
    id: string,
    title: string,
    image?: string,
    count?: string,
    onPress?: () => void
}
const CategoryItem: React.FC<category> = (item) => {
    console.log(item.image)
    return (
        <View className={`flex-1`} >

            <TouchableOpacity className={`mx-6 mb-5 flex-row h-[75px]`} onPress={item.onPress}>
                {item.image &&
                    <View className={`w-[75px] h-[75px] mr-6 border border-[#D7D7D7] rounded-[10px] justify-center items-center`}>
                        <Image source={{ uri: 'https://www.google.com/search?q=image+react+native&sxsrf=ALiCzsYyJm0ZvZZ4y20KkUtV53hrpsvOpg:1665470120411&source=lnms&tbm=isch&sa=X&ved=2ahUKEwioxaTXx9f6AhUnmFYBHXvYBtYQ_AUoAXoECAEQAw&biw=1889&bih=837&dpr=1#imgrc=NHEC8ThBQMNPAM' }} />
                    </View>
                }

                <View className={` justify-center `}>
                    <Text className={`text-center text-sm leading-[14px] text-[#2E2E2E] font-medium`} >{item.title}</Text>
                </View>
                <View className={` absolute right-3 top-7 `}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </View>

            </TouchableOpacity>

        </View>
    )

}

export default CategoryItem