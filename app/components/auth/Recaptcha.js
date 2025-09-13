import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import { forwardRef } from 'react';
import app from '../../firebase/firebaseApp';

const Recaptcha = forwardRef(function Recaptcha(_, ref) {
  return (
    <FirebaseRecaptchaVerifierModal
      ref={ref}
      firebaseConfig={app.options}
      attemptInvisibleVerification
    />
  );
});

export default Recaptcha;
