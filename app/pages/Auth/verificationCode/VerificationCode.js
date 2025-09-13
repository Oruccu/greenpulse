import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import AuthLayout from '../../../components/auth/AuthLayout';
import Recaptcha from '../../../components/auth/Recaptcha';
import OtpInput from '../../../components/form/OtpInput';
import { PrimaryButton } from '../../../components/ui';
import { confirmSmsCode, sendSmsCode, setDisplayName } from '../../../firebase/phoneAuth';

const RESEND_SEC = 30;

export default function VerificationCode() {
  const navigation = useNavigation();
  const route = useRoute();
  const { phone, mode, confirmation, displayName } = route.params || {};
  const recaptchaRef = useRef(null);

  const [code, setCode] = useState('');
  const [timeLeft, setTimeLeft] = useState(RESEND_SEC);
  const [confirmObj, setConfirmObj] = useState(confirmation);

  useEffect(() => {
    const t = setInterval(() => setTimeLeft((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(t);
  }, []);

  const onResend = async () => {
    if (timeLeft > 0) return;
    try {
      const conf = await sendSmsCode(phone, recaptchaRef.current);
      setConfirmObj(conf);
      setTimeLeft(RESEND_SEC);
    } catch (e) {
      console.warn('Resend error', e?.message);
    }
  };

  const onContinue = async () => {
    try {
      const user = await confirmSmsCode(confirmObj, code);
      if (mode === 'signup' && displayName) {
        await setDisplayName(displayName);
      }
      // Giriş başarılı → tablara veya root akışına
      navigation.getParent()?.reset({ index: 0, routes: [{ name: 'AppTabs' }] });
    } catch (e) {
      console.warn('Verify error', e?.message);
    }
  };

  return (
    <AuthLayout>
      <View style={{ gap: 8 }}>
        <Text style={{ fontSize: 28, fontWeight: '800' }}>
          {mode === 'signup' ? 'Verify your phone' : 'Verification code'}
        </Text>
        <Text style={{ color: '#64748B' }}>Enter the 6-digit code sent to your phone number.</Text>
      </View>

      <OtpInput value={code} onChange={setCode} length={6} />

      <View style={{ flexDirection: 'row', gap: 6, alignItems: 'center' }}>
        <Text style={{ color: '#64748B' }}>Didn’t receive the code?</Text>
        <Pressable onPress={onResend} disabled={timeLeft > 0}>
          <Text style={{ color: timeLeft > 0 ? '#94A3B8' : '#008837', fontWeight: '700' }}>
            Resend {timeLeft > 0 ? `(${String(timeLeft).padStart(2,'0')})` : ''}
          </Text>
        </Pressable>
      </View>

      <PrimaryButton title={mode === 'signup' ? 'Verify my account' : 'Continue'} onPress={onContinue} />

      <Recaptcha ref={recaptchaRef} />
    </AuthLayout>
  );
}
