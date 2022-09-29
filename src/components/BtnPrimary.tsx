import {TouchableOpacity, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {orangeDark, orangeLight} from '../constant/const';

interface Props {
  style: string;
  onPress?: () => void;
  prop?: object;
  content: string;
}

const BtnPrimary: React.FC<Props> = props => {
  const {content, style, onPress, prop} = props;
  console.log(content);

  return (
    <LinearGradient
      className={`${style} rounded-md`}
      colors={[orangeLight, orangeDark]}
      start={{x: 0, y: 0.5}}
      end={{x: 1, y: 0.5}}
      locations={[0, 1]}>
      <TouchableOpacity className="p-3" onPress={onPress} {...prop}>
        <Text style={{color: '#FFF'}}>Đăng nhập</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default BtnPrimary;
