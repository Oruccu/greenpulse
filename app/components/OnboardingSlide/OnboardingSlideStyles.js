import { StyleSheet } from 'react-native';
import Color from '../../styles/Color';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.background,
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 0,
    justifyContent: 'space-between',
  },
  brandWrap: {
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 8,
  },
  logo: { 
    width: 140, 
    height: 40, 
    resizeMode: 'contain' 
  },

  illustration: { 
    alignItems: 'center', 
    marginTop: 8, 
    marginBottom: 16 
  },
  illustrationImg: { 
    width: '100%', 
    height: 240, 
    resizeMode: 'contain' 
  },

  textWrap: { 
    gap: 12, 
    alignItems: 'center', 
    paddingHorizontal: 8, 
    marginBottom: 16 
  },
  title: { 
    color: Color.text, 
    fontSize: 24, 
    fontWeight: '800', 
    textAlign: 'center' 
  },
  body: { 
    color: Color.muted, 
    fontSize: 16, 
    lineHeight: 22, 
    textAlign: 'center' 
  },
  caption: { 
    color: Color.accent, 
    fontSize: 13, 
    textAlign: 'center' 
  },

   actions: {
    gap: 12,
    paddingHorizontal: 24,   
    paddingBottom: 24,       
  },
  actionsRow: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center' 
  },
  rowItem: { flex: 1 },
});
