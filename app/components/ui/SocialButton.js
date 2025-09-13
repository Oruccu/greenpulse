import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import Color from '../../styles/Color';
import styles from './SocialButtonStyles';

const ICONS = {
  google: { name: 'logo-google', size: 22, color: Color.text },
  apple:  { name: 'logo-apple',  size: 22, color: Color.text },
};

export default function SocialButton({
  title,
  provider = 'google', 
  onPress,
  testID,
}) {
  const { name, size, color } = ICONS[provider] || ICONS.google;

  return (
    <Pressable
      testID={testID}
      accessibilityRole="button"
      accessibilityLabel={title}
      onPress={onPress}
      android_ripple={{ color: '#00000011' }}
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
    >
      <View style={styles.row}>
        <Ionicons name={name} size={size} color={color} style={styles.icon} />
        <Text style={styles.text}>{title}</Text>
        <View style={styles.iconSpacer} />
      </View>
    </Pressable>
  );
}
