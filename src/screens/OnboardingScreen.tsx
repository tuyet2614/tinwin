import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
import {Image, SafeAreaView, View, Text} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import BtnBorder from '../components/BtnBorder';
import BtnIcon from '../components/BtnIcon';
import ImageOnboarding from '../components/onboarding/ImageOnboarding';
import SubTitleOnboarding from '../components/onboarding/SubTitleOnboarding';
import TitleOnboarding from '../components/onboarding/TitleOnboarding';

const pages: object[] = [
  {
    backgroundColor: '#fff',
    image: (
      <Image
        source={require('../assets/onboarding/onboarding1.png')}
        className="h-44 w-44"
      />
      // <ImageOnboarding image="../assets/onboarding/onboarding1.png" />
    ),
    title: <TitleOnboarding title="Niềm tin tạo nên sức mạnh" />,
    subtitle: (
      <SubTitleOnboarding text="Nền tảng kết nối khách hàng đến nhà bán hàng uy tín" />
    ),
  },
  {
    backgroundColor: '#fff',
    image: (
      <Image
        source={require('../assets/onboarding/onboarding2.png')}
        className="h-44 w-44"
      />
    ),
    title: <TitleOnboarding title="Bảo vệ người tiêu dùng" />,
    subtitle: (
      <SubTitleOnboarding text="Tất cả người tiêu dùng không phân biệt tầng lớp giai cấp đều được bảo vệ và hỗ trợ, khi mua sản phẩm qua app" />
    ),
  },
  {
    backgroundColor: '#fff',
    image: (
      <Image
        source={require('../assets/onboarding/onboarding3.png')}
        className="h-44 w-44"
      />
    ),
    title: <TitleOnboarding title="Kết nối từ yêu thương" />,
    subtitle: (
      <SubTitleOnboarding text="Tinwin luôn yêu thương và bảo vệ khách hàng như người thân của mình" />
    ),
  },
];

const Square: React.FC = ({isLight, selected}) => {
  return (
    <View
      className={`rounded-full w-2 h-2 mx-1 ${
        selected ? 'bg-orange-primary' : 'bg-gray-200'
      }`}
    />
  );
};

const OnboardingScreen: React.FC = () => {
  return (
    <Onboarding
      // containerStyles={{height: 200, backgroundColor: 'red'}}
      bottomBarHeight={100}
      bottomBarColor="white"
      DotComponent={Square}
      pages={pages}
      NextButtonComponent={() => <BtnIcon icon={faArrowRight} style="mr-8" />}
      SkipButtonComponent={() => (
        <BtnBorder text="Bỏ qua" style="ml-8 px-3 py-2" />
      )}
      DoneButtonComponent={() => <BtnIcon icon={faArrowRight} style="mr-8" />}
    />
  );
};

export default OnboardingScreen;
