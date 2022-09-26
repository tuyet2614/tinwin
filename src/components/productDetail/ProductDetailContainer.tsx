import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import {FlatList, View} from 'react-native';
import InfoDetailItem from './InfoDetailItem';
import ProductDetailTitle from './ProductDetailTitle';

interface Props {
  arr: object[];
  title: string;
  icon: IconProp;
}

const ProductDetailContainer: React.FC<Props> = (props: Props) => {
  const {arr, title, icon} = props;

  return (
    <View>
      <ProductDetailTitle icon={icon} title={title} />
      <FlatList
        data={arr}
        keyExtractor={key => key.id}
        renderItem={({item}) => (
          <InfoDetailItem text={item.text} value={item.value} />
        )}
      />
    </View>
  );
};

export default ProductDetailContainer;
