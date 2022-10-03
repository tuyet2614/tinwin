import { faGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { colors } from '../../assets/colors';

const SettingsBtn: React.FC = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity >
      <FontAwesomeIcon icon={faGear} color={`${colors.white}`} size={25} />
    </TouchableOpacity>
  );
};

export default SettingsBtn;
