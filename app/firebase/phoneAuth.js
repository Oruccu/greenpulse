// app/firebase/phoneAuth.js
import { signInWithPhoneNumber, updateProfile } from 'firebase/auth';
import { auth } from './firebaseApp';

/**
 * Telefon numarasına SMS gönder
 * @param {string} phone E.164 formatında: +905xxxxxxxxx
 * @param {object} recaptchaVerifier Ref (FirebaseRecaptchaVerifierModal)
 * @returns confirmation (confirm(code) çağırılır)
 */
export async function sendSmsCode(phone, recaptchaVerifier) {
  return await signInWithPhoneNumber(auth, phone, recaptchaVerifier);
}

/**
 * SMS kodunu onayla (giriş veya yeni hesap)
 * @param {object} confirmation signInWithPhoneNumber dönüşü
 * @param {string} code 6 haneli kod
 */
export async function confirmSmsCode(confirmation, code) {
  const credentialUser = await confirmation.confirm(code);
  return credentialUser.user;
}

/**
 * İsteğe bağlı: yeni üye olduysa görüntü adını set et
 */
export async function setDisplayName(displayName) {
  if (auth.currentUser && displayName) {
    await updateProfile(auth.currentUser, { displayName });
  }
}
