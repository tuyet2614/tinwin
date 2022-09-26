import {useState} from 'react';
import {Text, View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

interface Props {
  text: string;
  style?: string;
}

const CheckBoxItem: React.FC<Props> = (props: Props) => {
  const {text, style} = props;
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View className={`flex-row items-center ${style}`}>
      <CheckBox
        boxType="square"
        style={{padding: 10}}
        onChange={() => setIsChecked(!isChecked)}
        value={isChecked}
        tintColor="#FD7D00"
        tintColors={{true: '#FD7D00', false: 'rgba(90, 90, 90, 0.7)'}}
      />
      <Text>{text}</Text>
    </View>
  );
};

export default CheckBoxItem;
