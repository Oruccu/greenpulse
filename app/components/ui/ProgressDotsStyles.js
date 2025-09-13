import { StyleSheet } from 'react-native';
import Color from '../../styles/Color';

export default StyleSheet.create({
    wrap: {
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 999
    },
    dotActive: {
        backgroundColor:
            Color.primary
    },
    dotInactive: {
        backgroundColor: Color.primaryLight,
        opacity: 0.8
    },
});
