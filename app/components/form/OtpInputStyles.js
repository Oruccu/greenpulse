import { StyleSheet } from 'react-native';
import Color from '../../styles/Color';

export default StyleSheet.create({
  container: { flexDirection: 'row', gap: 8, alignSelf: 'flex-start' },
  cell: { width: 44, height: 44, borderRadius: 8, backgroundColor: '#F1F5F9', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#E2E8F0' },
  cellText: { fontSize: 18, fontWeight: '700', color: Color.text },
  hidden: { position: 'absolute', opacity: 0, height: 0, width: 0 },
});
