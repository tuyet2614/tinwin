import {SafeAreaView, Text, View} from 'react-native';
import RangeSlider from 'rn-range-slider';

const NotificationScreen: React.FC = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <Text>Notification</Text>
      <RangeSlider
        min={0}
        max={5000000}
        step={20000}
        // onValueChanged={(low, high, fromUser) => {
        //   setMinPrice(low);
        //   setMaxPrice(high);
        // }}
        renderThumb={() => {
          return (
            <View className="w-4 h-4 rounded-full bg-orange-primary"></View>
          );
        }}
        renderRail={() => {
          return <View className="h-0.5 flex-1 rounded-lg bg-gray-400"></View>;
        }}
        renderRailSelected={() => {
          return (
            <View className="h-0.5 flex-1 rounded-lg bg-orange-primary"></View>
          );
        }}
        renderLabel={value => {
          return <View></View>;
        }}
        renderNotch={() => {
          return <View />;
        }}
      />
    </SafeAreaView>
  );
};

export default NotificationScreen;
