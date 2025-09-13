import { StyleSheet } from 'react-native';
import Color from '../../styles/Color';

export default StyleSheet.create({
  wrap: { gap: 6 },
  label: { color: Color.text, fontWeight: '700' },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#D1D5DB',
    paddingVertical: 10,
    fontSize: 16,
    color: Color.text,
  },
});
