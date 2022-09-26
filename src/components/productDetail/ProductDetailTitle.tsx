import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Text, View} from 'react-native';

interface Props {
  icon: IconProp;
  title: string;
}

const ProductDetailTitle: React.FC<Props> = (props: Props) => {
  const {icon, title} = props;

  return (
    <View className="flex-row">
      <FontAwesomeIcon icon={icon} />
      <Text>{title}</Text>
    </View>
  );
};

export default ProductDetailTitle;
