import {useState} from 'react';
import {Text, View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

interface Props {
  text: string;
  style?: string;
  onChange?: void;
  icon?: IconProp;
}

const CheckBoxItem: React.FC<Props> = (props: Props) => {
  const {text, style, onChange, icon} = props;
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View className={`flex-row items-center ${style}`}>
      <CheckBox
        boxType="square"
        style={{padding: 10}}
        onChange={() => {
          setIsChecked(!isChecked);
          onChange !== undefined && onChange();
        }}
        value={isChecked}
        tintColor="#FD7D00"
        tintColors={{true: '#FD7D00', false: 'rgba(90, 90, 90, 0.7)'}}
      />
      <FontAwesomeIcon icon={icon} style={{marginEnd: 7}} />
      <Text className="text-black">{text}</Text>
    </View>
  );
};

export default CheckBoxItem;
