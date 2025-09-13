import { View } from 'react-native';
import styles from './ProgressDotsStyles';

export default function ProgressDots({
  current,
  active,          
  total = 3,
  visible = true,  
}) {
  if (!visible) return null;

  const idx = Number(active ?? current ?? 0);
  const count = Number(total);

  return (
    <View style={styles.wrap}>
      {Array.from({ length: count }).map((_, i) => (
        <View
          key={i}
          style={[
            styles.dot,
            i === idx ? styles.dotActive : styles.dotInactive
          ]}
        />
      ))}
    </View>
  );
}
