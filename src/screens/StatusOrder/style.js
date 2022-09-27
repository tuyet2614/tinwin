import {Dimensions, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    paddingBottom: 30,
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 30,
  },
  title: {
    flexDirection: 'row',
  },
  textTitle: {
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 20,
    color: '#48484A',
    marginLeft: 6,
  },
  infor: {
    marginTop: 26,
    flexDirection: 'row',
  },
  textInfor: {
    width: 0,
    flexGrow: 1,
    flex: 1,
    marginLeft: 17,
  },
  imgProduct: {
    width: 76,
    height: 76,
  },
  productTitle: {
    flexWrap: 'wrap',
    color: '#48484A',
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '400',
  },
  productCode: {
    marginTop: 3,
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 14,
    color: '#48484A',
  },
  price: {
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 22,
    color: '#48484A',
  },
  count: {
    fontSize: 12,
    lineHeight: 14,
    fontWeight: '500',
    color: '#FC832D',
  },
  totalCount: {
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 14,
    color: '#9B9B9B',
  },
  totalPrice: {
    marginLeft: 8,
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 18,
    color: '#FC832D',
  },
});
