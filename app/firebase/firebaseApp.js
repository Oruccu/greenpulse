// app/firebase/firebaseApp.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Aşağıdaki alanları Firebase konsolundan doldurun.
// Verdiğiniz bilgiler:
//  - Project ID: fortumgreenpulse
//  - Project number: 461191469760
//  - Web API Key: AIzaSyB7ou8lucpTvZMBQA5s6IdU8copxi76Cyw
// Gerekli ek alanlar (authDomain, appId, messagingSenderId, storageBucket) konsoldan alınmalı.
const firebaseConfig = {
  apiKey: 'AIzaSyB7ou8lucpTvZMBQA5s6IdU8copxi76Cyw',
  authDomain: 'fortumgreenpulse.firebaseapp.com',   // ← konsoldan doğrulayın
  projectId: 'fortumgreenpulse',
  storageBucket: 'fortumgreenpulse.appspot.com',    // ← konsoldan doğrulayın
  messagingSenderId: '461191469760',                // ← konsoldan doğrulayın
  appId: '1:461191469760:web:xxxxxxxxxxxxxxxxxxxxxx'// ← konsoldan koyun
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
