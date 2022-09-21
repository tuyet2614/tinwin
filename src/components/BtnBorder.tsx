import {Text, TouchableOpacity} from 'react-native';

interface Props {
  text: string;
  style: string;
}

const BtnBorder: React.FC<Props> = (props: Props) => {
  const {text, style} = props;

  return (
    <TouchableOpacity
      className={`border-orange-primary border-2 ${style} rounded-md`}>
      <Text className={`text-orange-primary`}>{text}</Text>
    </TouchableOpacity>
  );
};

export default BtnBorder;
