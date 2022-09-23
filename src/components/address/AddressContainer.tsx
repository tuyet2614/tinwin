import {FlatList, View, VirtualizedList} from 'react-native';
import AddressItem from './AddressItem';

interface Props {
  data: object[];
}

const AddressContainer: React.FC<Props> = (props: Props) => {
  const {data} = props;

  return (
    <View>
      {data.map(item => (
        <AddressItem
          name={item.name}
          phone={item.phone}
          address={item.address}
        />
      ))}
    </View>
  );
  // <VirtualizedList
  //   getItem={(data, index) => ({
  //     id: data[index].id,
  //     name: data[index].name,
  //     phone: data[index].phone,
  //     address: data[index].address,
  //   })}

  //   getItemCount={data => data.length}
  //   className="relative z-0"
  //   contentContainerStyle={{height: '100%'}}
  //   data={data}
  //   keyExtractor={key => key.id}
  //   renderItem={({item}) => (
  //     <AddressItem
  //       name={item.name}
  //       phone={item.phone}
  //       address={item.address}
  //     />
  //   )}
  // />
};

export default AddressContainer;
