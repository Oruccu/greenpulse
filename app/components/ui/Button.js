import { Pressable, Text } from 'react-native';
import styles from './ButtonStyles';

export function PrimaryButton({
  title, onPress, testID, androidRippleColor = '#00000011', accessibilityLabel, style,
}) {
  return (
    <Pressable
      testID={testID}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel || title}
      onPress={onPress}
      android_ripple={{ color: androidRippleColor }}
      style={({ pressed }) => [styles.primaryButton, pressed && styles.pressed, style]}
    >
      <Text style={styles.primaryText}>{title}</Text>
    </Pressable>
  );
}

export function GhostButton({
  title, onPress, testID, androidRippleColor = '#00000011', accessibilityLabel, style,
}) {
  return (
    <Pressable
      testID={testID}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel || title}
      onPress={onPress}
      android_ripple={{ color: androidRippleColor }}
      style={({ pressed }) => [styles.ghostButton, pressed && styles.pressed, style]}
    >
      <Text style={styles.ghostText}>{title}</Text>
    </Pressable>
  );
}
