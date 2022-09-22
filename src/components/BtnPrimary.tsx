import {TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Text} from 'react-native-svg';

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
      colors={['#FD7D00', '#FEB336']}
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
