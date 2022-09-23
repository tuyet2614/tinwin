import {Text, TextInput, View} from 'react-native';

interface Props {
  title: string;
  placeholder: string;
  style?: string;
}

const InputItem: React.FC<Props> = (props: Props) => {
  const {title, placeholder, style} = props;

  return (
    <View className={style}>
      <Text className="my-2">
        {title}
        <Text className="text-red-danger">*</Text>
      </Text>
      <TextInput
        placeholder={placeholder}
        className="border-2 border-gray-100 p-3 rounded-lg"
      />
    </View>
  );
};

export default InputItem;
