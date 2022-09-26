import {Text, TouchableOpacity} from 'react-native';
import {Rating} from 'react-native-ratings';

interface Props {
  text: string;
  num?: number;
  onPress?: () => void;
  rating?: number;
  isChoose?: boolean;
}

const BtnFilterRating: React.FC<Props> = (props: Props) => {
  const {text, num, onPress, rating, isChoose} = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      className={`border ${
        isChoose ? 'border-orange-primary' : 'border-gray-200'
      } items-center mb-2 p-2 rounded-lg`}>
      {text !== undefined ? (
        <Text
          className={`${text !== undefined && 'w-40'} ${
            isChoose ? 'text-orange-primary' : ''
          } text-center`}>
          {text}
        </Text>
      ) : (
        <Rating
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: text === undefined ? 9 : 0,
          }}
          type="star"
          startingValue={rating}
          imageSize={10}
          readonly
          ratingCount={rating}
        />
      )}
      <Text className={`${isChoose ? 'text-orange-primary' : ''}`}>
        ({num})
      </Text>
    </TouchableOpacity>
  );
};

export default BtnFilterRating;
