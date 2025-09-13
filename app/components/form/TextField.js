import { Text, TextInput, View } from 'react-native';
import styles from './TextFieldStyles';

export default function TextField({ label, value, onChangeText, keyboardType, secureTextEntry, placeholder, autoComplete, textContentType, ...rest }) {
  return (
    <View style={styles.wrap}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        autoComplete={autoComplete}
        textContentType={textContentType}
        style={styles.input}
        {...rest}
      />
    </View>
  );
}
