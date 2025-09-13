import { StyleSheet } from 'react-native';
import Color from '../../styles/Color';

export default StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: Color.white,
  },

  content: {
    paddingHorizontal: 18,  
    paddingTop: 13,         
    paddingBottom: 20,      
  },

 
  header: {
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 16,
  },
  logo: { width: 160, height: 48, resizeMode: 'contain' },


  body: {
    gap: 16,
    alignSelf: 'stretch',
    maxWidth: 400,         
    alignItems: 'stretch',
  },
});
