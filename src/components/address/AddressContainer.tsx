import {useNavigation} from '@react-navigation/native';
import {
  FlatList,
  ImageSourcePropType,
  View,
  VirtualizedList,
} from 'react-native';
import {NAVIGATE_ADD_NEW_ADDRESS} from '../../navigation/navigate';
import AddressItem from './AddressItem';

interface Props {
  data: object[];
  icon?: ImageSourcePropType;
  setValue?: React.Dispatch<React.SetStateAction<any>>;
}

const AddressContainer: React.FC<Props> = (props: Props) => {
  const {data, icon, setValue} = props;

  const navigation = useNavigation();

  const onPress = (item: object) => {
    icon !== undefined
      ? navigation.navigate(NAVIGATE_ADD_NEW_ADDRESS, {
          title: 'Sửa địa chỉ',
          item: {
            name: item.name,
            phone: item.phone,
            address: item.address,
          },
        })
      : setValue(item.address);
  };

  return (
    <VirtualizedList
      getItem={(data, index) => ({
        id: data[index].id,
        name: data[index].name,
        phone: data[index].phone,
        address: data[index].address,
      })}
      getItemCount={data => data.length}
      className="relative z-0"
      contentContainerStyle={{height: '100%'}}
      data={data}
      keyExtractor={key => key.id}
      renderItem={({item}) => (
        <AddressItem
          icon={icon}
          onPress={() => onPress(item)}
          name={item.name}
          phone={item.phone}
          address={item.address}
        />
      )}
    />
  );
};

export default AddressContainer;
