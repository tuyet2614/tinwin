import {View} from 'react-native';

export function RadioOrangeBtn(props) {
  return (
    <View
      style={[
        {
          height: 20,
          width: 20,
          borderRadius: 12,
          borderWidth: 1,
          borderColor: props.selected ? '#FC832D' : '#8E8E93',
          alignItems: 'center',
          justifyContent: 'center',
        },
        props.style,
      ]}>
      {props.selected ? (
        <View
          style={{
            height: 10,
            width: 10,
            borderRadius: 6,
            backgroundColor: '#FC832D',
          }}
        />
      ) : null}
    </View>
  );
}
