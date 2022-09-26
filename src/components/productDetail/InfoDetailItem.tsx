import {Text, View} from 'react-native';

interface Props {
  text: string;
  value: string;
}

const InfoDetailItem: React.FC<Props> = (props: Props) => {
  const {text, value} = props;

  return (
    <View className="flex-row justify-between">
      <Text>{text}</Text>
      <Text>{value}</Text>
    </View>
  );
};

export default InfoDetailItem;
