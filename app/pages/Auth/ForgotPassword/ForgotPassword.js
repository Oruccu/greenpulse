import { useNavigation } from '@react-navigation/native';
import React, { useRef, useState } from 'react';
import { Text, View } from 'react-native';
import AuthLayout from '../../../components/auth/AuthLayout';
import Recaptcha from '../../../components/auth/Recaptcha';
import TextField from '../../../components/form/TextField';
import { PrimaryButton } from '../../../components/ui';
import { sendSmsCode } from '../../../firebase/phoneAuth';

export default function ForgotPassword() {
  const navigation = useNavigation();
  const [phone, setPhone] = useState('');
  const recaptchaRef = useRef(null);

  const onContinue = async () => {
    try {
      const confirmation = await sendSmsCode(phone, recaptchaRef.current);
      navigation.navigate('VerificationCode', { phone, mode: 'reset', confirmation });
    } catch (e) {
      console.warn('SMS error:', e?.message);
    }
  };

  return (
    <AuthLayout>
      <View style={{ gap: 8 }}>
        <Text style={{ fontSize: 28, fontWeight: '800' }}>Forgot password?</Text>
        <Text style={{ color: '#64748B' }}>Enter your phone number to reset your password</Text>
      </View>

      <TextField label="Phone Number" value={phone} onChangeText={setPhone} keyboardType="phone-pad" placeholder="+90..." />

      <PrimaryButton title="Continue" onPress={onContinue} />
      <Recaptcha ref={recaptchaRef} />
    </AuthLayout>
  );
}
