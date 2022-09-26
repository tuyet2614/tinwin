import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => { navigation.navigate('Search') }}>
        <Text>Home</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
};

export default HomeScreen;
