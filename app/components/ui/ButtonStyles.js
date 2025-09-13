import { StyleSheet } from 'react-native';
import Color from '../../styles/Color';

export default StyleSheet.create({
  primaryButton: {
    backgroundColor: Color.primary,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  primaryText: { color: Color.white, fontWeight: '700', fontSize: 16 },

  ghostButton: {
    borderWidth: 1,
    borderColor: Color.border,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.white,
    width: '100%',
  },
  ghostText: { color: Color.text, fontWeight: '700', fontSize: 16 },

  pressed: { opacity: 0.9 },
});
