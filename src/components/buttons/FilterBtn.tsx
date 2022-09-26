import { faSliders } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { TouchableOpacity, View } from 'react-native';

const FilterBtn: React.FC = () => {
    return (
        <View className={' ml-2 border-[1px]  w-[45px] h-[45px] rounded-lg  justify-center items-center'}>
            <TouchableOpacity>
                <FontAwesomeIcon icon={faSliders} color="#7B7B80" size={25} />
            </TouchableOpacity>
        </View>

    );
};

export default FilterBtn;
