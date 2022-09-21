import {Image, View} from 'react-native';

interface Props {
  image: string;
}

const ImageOnboarding: React.FC<Props> = (props: Props) => {
  const {image} = props;

  return (
    <View>
      <Image
        source={require('../../assets/logoTinwin.png')}
        className="w-24 h-12"
      />
      <Image source={require(image)} className="h-44 w-44" />
    </View>
  );
};

export default ImageOnboarding;
