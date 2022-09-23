import {useNavigation} from '@react-navigation/native';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';

const CategoriesScreen: React.FC = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Cart');
        }}>
        <Text>Categories</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CategoriesScreen;
