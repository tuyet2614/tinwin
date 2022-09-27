import {faAngleRight, faStore} from '@fortawesome/free-solid-svg-icons';
import {useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import useConvertToVND from '../../hooks/useConvertToVND';
import useTotalPrice from '../../hooks/wishlist/useTotalPrice';
import CartItem from './CartItem';
import SelectAllCartItem from './SelectAllCartItem';

interface Props {
  title: string;
  data: object[];
}

const CartContainer: React.FC<Props> = (props: Props) => {
  const {title, data} = props;

  const totalPrice = useTotalPrice(data);

  return (
    <View>
      <SelectAllCartItem
        title={title}
        icon={faStore}
        iconRight={faAngleRight}
      />
      <FlatList
        contentContainerStyle={{marginHorizontal: 20}}
        data={data}
        keyExtractor={key => key.id}
        renderItem={({item}) => <CartItem item={item} />}
      />
      <View className="flex-row mx-5 justify-between my-2">
        <Text>Tổng tiền hàng</Text>
        <Text className="text-orange-primary font-bold">
          {useConvertToVND(totalPrice)}
        </Text>
      </View>
    </View>
  );
};

export default CartContainer;
