import { StyleSheet } from 'react-native';
import Color from '../../styles/Color';

export default StyleSheet.create({
  button: {
    width: '100%',
    backgroundColor: Color.white,
    borderWidth: 1,
    borderColor: Color.border,
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 14,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  icon: { width: 22, height: 22, resizeMode: 'contain' },
  text: { fontSize: 16, fontWeight: '700', color: Color.text },
  spacer: { width: 22 }, // icon genişliği kadar boşluk
});
