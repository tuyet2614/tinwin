import {
  faMinus,
  faMinusCircle,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import useUpdateQuantity from '../../hooks/wishlist/useUpdateQuantity';

interface Props {
  quantity: number;
  item: object;
}

const Quantity: React.FC<Props> = (props: Props) => {
  const [value, setValue] = useState(0);
  const {quantity, item} = props;

  useEffect(() => {
    setValue(quantity);
  }, []);

  const dispatchUpdateQuantity = useUpdateQuantity();

  return (
    <View className="flex-row items-center">
      <TouchableOpacity
        disabled={value <= 1 ? true : false}
        onPress={() => {
          dispatchUpdateQuantity({id: item.id, quantity: value - 1});
          setValue(value - 1);
        }}
        className={`p-1 items-center justify-center rounded-full bg-${
          value <= 1 ? 'gray-200' : 'orange-primary'
        }`}>
        <FontAwesomeIcon
          icon={faMinus}
          size={10}
          color={value <= 1 ? 'black' : 'white'}
        />
      </TouchableOpacity>
      <Text className="mx-2">{value}</Text>
      <LinearGradient
        className="rounded-full"
        colors={['#FD7D00', '#FEB336']}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0.5}}
        locations={[0, 1]}>
        <TouchableOpacity
          className="p-1"
          onPress={() => {
            dispatchUpdateQuantity({id: item.id, quantity: value + 1});
            setValue(value + 1);
          }}>
          <FontAwesomeIcon icon={faPlus} size={10} color="white" />
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default Quantity;
