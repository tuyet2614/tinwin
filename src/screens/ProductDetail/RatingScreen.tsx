import {FlatList, SafeAreaView, View} from 'react-native';
import HeaderStack from '../../components/HeaderStack';
import BtnFilterRating from '../../components/productDetail/BtnFilterRating';
import {arr} from '../../components/productDetail/RatingContainer';
import RatingItem from '../../components/productDetail/RatingItem';
import useChoose from '../../hooks/useChoose';

const RatingScreen: React.FC = () => {
  const arrFilter = [
    {
      id: 1,
      text: 'Tất cả',
      num: 10,
    },
    {
      id: 2,
      text: 'Có bình luận',
      num: 10,
    },
    {
      id: 3,
      rating: 5,
      num: 10,
    },
    {
      id: 4,
      rating: 4,
      num: 10,
    },
    {
      id: 5,
      rating: 3,
      num: 10,
    },
    {
      id: 6,
      rating: 2,
      num: 10,
    },
    {
      id: 7,
      rating: 1,
      num: 10,
    },
  ];

  const {choose, isChoose, itemIsChoose} = useChoose(arrFilter);

  return (
    <SafeAreaView className="bg-white h-full">
      <HeaderStack text="Đánh giá sản phẩm" isGoback={true} />
      <View className="">
        <FlatList
          horizontal
          contentContainerStyle={{
            width: '100%',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly',
          }}
          data={arrFilter}
          keyExtractor={key => key.id}
          renderItem={({item}) => (
            <BtnFilterRating
              onPress={() => isChoose(item)}
              isChoose={choose(item)}
              text={item.text}
              num={item.num}
              rating={item.rating}
            />
          )}
        />
        <View className="h-2 bg-gray-100"></View>

        <FlatList
          contentContainerStyle={{marginHorizontal: 20, marginVertical: 10}}
          data={arr}
          keyExtractor={key => key.id}
          renderItem={({item}) => <RatingItem item={item} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default RatingScreen;
