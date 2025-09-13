import { useNavigation } from '@react-navigation/native';
import { updatePassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Alert, Text, View } from 'react-native';
import AuthLayout from '../../../components/auth/AuthLayout';
import TextField from '../../../components/form/TextField';
import { PrimaryButton } from '../../../components/ui';
import { auth } from '../../../firebase/firebaseApp';

export default function ResetPassword() {
  const navigation = useNavigation();
  const [p1, setP1] = useState('');
  const [p2, setP2] = useState('');

  const onSet = async () => {
    if (p1.length < 6 || p1 !== p2) {
      Alert.alert('Password', 'Please enter matching passwords (min 6 chars).');
      return;
    }
    try {
      if (!auth.currentUser) throw new Error('Not signed in');
      await updatePassword(auth.currentUser, p1); 
      navigation.navigate('SignIn');
    } catch (e) {
      Alert.alert('Password', e?.message || 'Could not set password.');
    }
  };

  return (
    <AuthLayout>
      <View style={{ gap: 8 }}>
        <Text style={{ fontSize: 28, fontWeight: '800' }}>Reset Password</Text>
        <Text style={{ color: '#64748B' }}>Create your account password</Text>
      </View>

      <TextField label="New password" value={p1} onChangeText={setP1} secureTextEntry />
      <TextField label="Confirm Password" value={p2} onChangeText={setP2} secureTextEntry />

      <PrimaryButton title="Sign In" onPress={onSet} />
    </AuthLayout>
  );
}
