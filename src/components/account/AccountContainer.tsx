import {FlatList, Text, View} from 'react-native';
import AccountItem from './AccountItem';

interface Props {
  title?: string;
  items: object[];
}

const AccountContainer: React.FC<Props> = (props: Props) => {
  const {title, items} = props;

  return (
    <View>
      {title !== undefined && (
        <Text className="py-2 bg-gray-100 text-black font-bold px-5">
          {title}
        </Text>
      )}
      <FlatList
        data={items}
        keyExtractor={key => key.text}
        renderItem={({item, index}) => (
          <AccountItem
            onPress={item.onPress}
            icon={item.icon}
            text={item.text}
            index={index}
            length={items.length}
            textRight={item.textRight}
          />
        )}
      />
    </View>
  );
};

export default AccountContainer;
