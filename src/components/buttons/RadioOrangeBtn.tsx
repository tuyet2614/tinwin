import {StyleSheet, View} from 'react-native';

export function RadioOrangeBtn(props) {
  return (
    <View style={[style.view, props.style]}>
      {props.selected ? <View style={style.text} /> : null}
    </View>
  );
}
const style = StyleSheet.create({
  text: {
    height: 10,
    width: 10,
    borderRadius: 6,
    backgroundColor: '#FC832D',
  },
  view: {
    height: 20,
    width: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: props.selected ? '#FC832D' : '#8E8E93',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
