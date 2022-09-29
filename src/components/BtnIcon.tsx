import {GestureResponderEvent, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import LinearGradient from 'react-native-linear-gradient';
import {orangeDark, orangeLight} from '../constant/const';

interface Props {
  icon: IconDefinition;
  style: string;
  onPress?: () => void;
  prop?: object;
}

const BtnIcon: React.FC<Props> = props => {
  const {icon, style, onPress, prop} = props;
  console.log(prop);

  return (
    <LinearGradient
      className={`${style} rounded-md`}
      colors={[orangeLight, orangeDark]}
      start={{x: 0, y: 0.5}}
      end={{x: 1, y: 0.5}}
      locations={[0, 1]}>
      <TouchableOpacity className="p-3" onPress={onPress} {...prop}>
        <FontAwesomeIcon icon={icon} color="white" />
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default BtnIcon;
