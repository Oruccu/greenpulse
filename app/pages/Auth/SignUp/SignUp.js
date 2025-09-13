import { useNavigation } from '@react-navigation/native';
import React, { useRef, useState } from 'react';
import { Alert, Pressable, Text, View } from 'react-native';

import AuthLayout from '../../../components/auth/AuthLayout';
import Recaptcha from '../../../components/auth/Recaptcha';
import TextField from '../../../components/form/TextField';
import { PrimaryButton, SocialButton } from '../../../components/ui';

import { sendSmsCode } from '../../../firebase/phoneAuth';
import styles from './SignUpStyles';

export default function SignUp() {
  const navigation = useNavigation();
  const recaptchaRef = useRef(null);

  const [name, setName]   = useState('');
  const [phone, setPhone] = useState('');
  const [pwd, setPwd]     = useState('');
  const [pwd2, setPwd2]   = useState('');

  const onSignUp = async () => {
    if (!name || !phone) {
      Alert.alert('Sign Up', 'Please fill name and phone.');
      return;
    }
    if (pwd.length < 6 || pwd !== pwd2) {
      Alert.alert('Sign Up', 'Passwords must match and be at least 6 characters.');
      return;
    }
    try {
      const confirmation = await sendSmsCode(phone, recaptchaRef.current);
      navigation.navigate('VerificationCode', {
        phone,
        mode: 'signup',
        confirmation,
        displayName: name,
      });
    } catch (e) {
      Alert.alert('Sign Up', e?.message || 'Could not send SMS.');
    }
  };

  return (
    <AuthLayout>
      {/* Başlık */}
      <View style={styles.top}>
        <Text style={styles.title}>Create your account</Text>
        <Text style={styles.subtitle}>Welcome. Let’s start</Text>
      </View>

      {/* Form */}
      <View style={styles.form}>
        <TextField
          label="User Name"
          value={name}
          onChangeText={setName}
          placeholder="Your name"
        />
        <TextField
          label="Phone Number"
          value={phone}
          onChangeText={setPhone}
          placeholder="+90..."
          keyboardType="phone-pad"
        />
        <TextField
          label="Password"
          value={pwd}
          onChangeText={setPwd}
          placeholder="••••••"
          secureTextEntry
        />
        <TextField
          label="Confirm Password"
          value={pwd2}
          onChangeText={setPwd2}
          placeholder="••••••"
          secureTextEntry
        />
      </View>

      {/* Sign Up butonu — input çizgileriyle aynı genişlik */}
      <View style={styles.cta}>
        <PrimaryButton title="Sign Up" onPress={onSignUp} testID="signup-submit" />
      </View>

      {/* Sosyal girişler */}
      <View style={styles.social}>
        <Text style={styles.socialSeparator}>- Or sign up with -</Text>

        <SocialButton
          title="Sign Up with Google"
          provider="google"
          onPress={() => {}}
          testID="signup-google"
        />

        <SocialButton
          title="Sign Up with Apple"
          provider="apple"
          onPress={() => {}}
          testID="signup-apple"
        />
      </View>

      {/* Alt link */}
      <Pressable
        onPress={() => navigation.navigate('SignIn')}
        style={styles.bottomLink}
      >
        <Text>
          I already have an account. <Text style={styles.linkHighlight}>Sign In</Text>
        </Text>
      </Pressable>

      <Recaptcha ref={recaptchaRef} />
    </AuthLayout>
  );
}
