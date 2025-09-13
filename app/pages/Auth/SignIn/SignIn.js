import { useNavigation } from '@react-navigation/native';
import React, { useRef, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import AuthLayout from '../../../components/auth/AuthLayout';
import Recaptcha from '../../../components/auth/Recaptcha';
import TextField from '../../../components/form/TextField';
import { GhostButton, PrimaryButton } from '../../../components/ui';
import { sendSmsCode } from '../../../firebase/phoneAuth';

export default function SignIn() {
  const navigation = useNavigation();
  const recaptchaRef = useRef(null);
  const [phone, setPhone] = useState('');

  const onSignIn = async () => {
    try {
      const confirmation = await sendSmsCode(phone, recaptchaRef.current);
      navigation.navigate('VerificationCode', { phone, mode: 'signin', confirmation });
    } catch (e) {
      console.warn('SMS error:', e?.message);
    }
  };

  return (
    <AuthLayout>
      <View style={{ gap: 8 }}>
        <Text style={{ fontSize: 28, fontWeight: '800' }}>Sign In</Text>
        <Text style={{ color: '#64748B' }}>Hi, nice to see you again.</Text>
      </View>

      <TextField
        label="Phone Number"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
        placeholder="+90..."
      />

      <PrimaryButton title="Sign In" onPress={onSignIn} testID="signin-submit" />

      <View style={{ alignItems: 'center', gap: 12 }}>
        <Text style={{ color: '#94A3B8' }}>- Or sign in with -</Text>
        <GhostButton title="Sign In with Google" onPress={() => {}} />
        <GhostButton title="Sign In with Apple" onPress={() => {}} />
      </View>

      <Pressable onPress={() => navigation.navigate('SignUp')} style={{ alignSelf: 'center', marginTop: 8 }}>
        <Text>Don’t have an account? <Text style={{ color: '#008837', fontWeight: '700' }}>Sign Up</Text></Text>
      </Pressable>

      <Pressable onPress={() => navigation.navigate('ForgotPassword')} style={{ alignSelf: 'flex-end' }}>
        <Text style={{ color: '#0891B2' }}>Forgot Password?</Text>
      </Pressable>

      <Recaptcha ref={recaptchaRef} />
    </AuthLayout>
  );
}
