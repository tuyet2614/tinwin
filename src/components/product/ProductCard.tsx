import {faCartArrowDown} from '@fortawesome/free-solid-svg-icons';
import {TouchableOpacity, Image, Text, View} from 'react-native';
import {Rating} from 'react-native-ratings';
import BtnIcon from '../BtnIcon';

interface Props {
  item: object;
}

const ProductCard: React.FC<Props> = (props: Props) => {
  const {item} = props;

  return (
    <TouchableOpacity
      className="p-3 border-2 border-gray-200 rounded-lg mb-3"
      style={{width: 185}}>
      <Image source={item.image} className={`w-full h-32`} />
      <Text className="text-lg font-bold text-black">{item.name}</Text>
      <Text>Đã bán 200</Text>
      <Rating
        style={{alignItems: 'flex-start', marginTop: 12}}
        type="star"
        startingValue={item.rating}
        imageSize={10}
        readonly
        ratingCount={5}
      />
      <Text className="text-orange-primary text-xl font-bold my-2">
        {item.price}
      </Text>
      <View className="flex-row justify-between">
        <TouchableOpacity className="">
          <Text className="text-black bg-blue-100 px-5 py-2 rounded-lg">
            Mua ngay
          </Text>
        </TouchableOpacity>
        <BtnIcon icon={faCartArrowDown} style="py-2 px-4" />
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
