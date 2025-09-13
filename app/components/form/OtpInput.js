import { useRef } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import styles from './OtpInputStyles';

export default function OtpInput({ value, onChange, length = 6, onSubmitEditing }) {
  const ref = useRef(null);
  const digits = (value || '').split('').slice(0, length);
  return (
    <Pressable onPress={() => ref.current?.focus()} style={styles.container}>
      {Array.from({ length }).map((_, i) => (
        <View key={i} style={styles.cell}>
          <Text style={styles.cellText}>{digits[i] || ''}</Text>
        </View>
      ))}
      <TextInput
        ref={ref}
        value={value}
        onChangeText={onChange}
        keyboardType="number-pad"
        maxLength={length}
        style={styles.hidden}
        returnKeyType="done"
        onSubmitEditing={onSubmitEditing}
      />
    </Pressable>
  );
}
