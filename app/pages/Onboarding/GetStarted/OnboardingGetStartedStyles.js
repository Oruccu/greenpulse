import { StyleSheet } from 'react-native';
import Colors from '../../../styles/Color';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.intro,
    padding: 24,
    justifyContent: 'space-between',
  },
  centerWrap: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center' 
  },

  logo: { 
    width: 220, 
    height: 80, 
    resizeMode: 'contain' 
  },
  logoPlaceholder: {
    width: 220, 
    height: 120, 
    borderRadius: 12,
    backgroundColor: Colors.primaryLight, 
    alignItems: 'center', 
    justifyContent: 'center',
  },
  logoText: { 
    color: Colors.primaryDark, 
    textAlign: 'center', 
    fontWeight: '800', 
    fontSize: 20, 
    lineHeight: 28 
  },

  primaryBtn: {
    backgroundColor: Colors.primary,
    paddingVertical: 14, 
    borderRadius: 12, 
    alignItems: 'center', 
    marginBottom: 12,
  },
  primaryBtnText: { 
    color: Colors.white, 
    fontSize: 16, 
    fontWeight: '700' 
  },

  ghostBtn: {
    backgroundColor: Colors.white, 
    borderColor: Colors.border, 
    borderWidth: 1,
    paddingVertical: 14, 
    borderRadius: 12, 
    alignItems: 'center', 
    marginBottom: 12,
  },
  ghostBtnText: { 
    color: Colors.text, 
    fontSize: 16, 
    fontWeight: '600' 
  },

  btnPressed: { opacity: 0.85 },
});
