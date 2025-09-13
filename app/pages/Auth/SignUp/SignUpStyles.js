import { StyleSheet } from 'react-native';
import Color from '../../../styles/Color';

export default StyleSheet.create({

  top: { gap: 6, alignSelf: 'stretch' },
  title: { fontSize: 28, fontWeight: '800', color: Color.text },
  subtitle: { color: Color.muted },

  form: {
    gap: 16,
    alignSelf: 'stretch',   
  },


  cta: {
    marginTop: 8,
    alignSelf: 'stretch',   
  },


  social: {
    alignSelf: 'stretch',
    gap: 12,
    marginTop: 4,
    alignItems: 'center',
  },
  socialSeparator: { color: '#94A3B8' },


  bottomLink: { alignSelf: 'center', marginTop: 8 },
  linkHighlight: { color: Color.primary, fontWeight: '700' },
});
