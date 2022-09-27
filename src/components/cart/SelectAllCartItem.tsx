import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Text, TouchableOpacity, View} from 'react-native';
import useDeleteAllWishlist from '../../hooks/wishlist/useDeleteAllWishlist';
import CheckBoxItem from '../CheckBoxItem';

interface Props {
  icon?: IconProp;
  title: string;
  iconRight: IconProp;
}

const SelectAllCartItem: React.FC<Props> = (props: Props) => {
  const {icon, title, iconRight} = props;

  const deleteAllWishlist = useDeleteAllWishlist();

  return (
    <View className="flex-row items-center justify-between p-3 px-5">
      <View className="flex-row items-center">
        <CheckBoxItem text={title} icon={icon} />
      </View>
      <TouchableOpacity onPress={() => deleteAllWishlist()}>
        <FontAwesomeIcon icon={iconRight} />
      </TouchableOpacity>
    </View>
  );
};

export default SelectAllCartItem;
