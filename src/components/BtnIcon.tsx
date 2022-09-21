import {TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
  icon: IconDefinition;
  style: string;
}

const BtnIcon: React.FC<Props> = (props: Props) => {
  const {icon, style} = props;

  return (
    <LinearGradient
      className={`${style} rounded-md`}
      colors={['#FD7D00', '#FEB336']}
      start={{x: 0, y: 0.5}}
      end={{x: 1, y: 0.5}}
      locations={[0, 1]}>
      <TouchableOpacity className="p-3">
        <FontAwesomeIcon icon={icon} color="white" />
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default BtnIcon;
