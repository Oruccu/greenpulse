import { StyleSheet } from 'react-native';
import Colors from '../../../styles/Color';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: 24
  },
  brandWrap: {
    alignItems: 'center',
    marginBottom: 12
  },
  brandText: {
    fontSize: 16,
    fontWeight: '800',
    color: Colors.primary,
    letterSpacing: 0.5
  },

  illustration: {
    height: 220,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },

  illustrationImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },

  textWrap: {
    marginTop: 18,
    alignItems: 'center'
  },
  title: {
    fontSize: 22,
    lineHeight: 28,
    fontWeight: '800',
    color: Colors.text,
    textAlign: 'center'
  },
  body: {
    marginTop: 8,
    fontSize: 15,
    color: Colors.muted,
    textAlign: 'center'
  },
  caption: {
    marginTop: 10,
    fontSize: 12,
    color: Colors.muted,
    textAlign: 'center'
  },

  dotsRow: {
    flexDirection: 'row',
    columnGap: 8,
    justifyContent: 'center',
    marginTop: 16
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.border
  },
  dotActive: {
    backgroundColor: Colors.primary,
    width: 18,
    borderRadius: 4
  },
  logo: {
    width: 220,
    height: 80,
    resizeMode: 'contain'
  },
  primaryBtn: {
    marginTop: 'auto',
    backgroundColor: Colors.primary,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 10,
  },
  primaryBtnText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '700'
  },

  ghostBtn: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.border,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  ghostBtnText: {
    color: Colors.text,
    fontSize: 16,
    fontWeight: '600'
  },

  btnPressed: { opacity: 0.85 },
});
