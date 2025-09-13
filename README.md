# Fortum GreenPulse ⚡️

Modern **Expo + React Native** app for live energy tracking, bill & CO₂e forecasting, and savings through goals & challenges. Built with **React Navigation** and **Firebase Phone Auth (OTP)**. Clean, reusable UI components.

---

## Demo

<!-- IMPORTANT: Do NOT wrap this <video> in code fences; paste as-is so GitHub renders it -->

<video width="100%" autoplay loop muted playsinline controls poster="docs/demo-poster.png">
  <!-- Preferred demo path -->
  <source src="docs/demo.mp4?raw=1" type="video/mp4" />
  <!-- Optional alternate path if you keep assets under app/ -->
  <source src="app/assets/fortum.mp4?raw=1" type="video/mp4" />
</video>

**Notes**

* Use **MP4 (H.264 + AAC)** for broad browser support.
  Convert from MOV if needed:
  `ffmpeg -i app/assets/fortum.mov -vcodec libx264 -acodec aac -movflags +faststart -crf 23 docs/demo.mp4`
* Autoplay requires **muted** (already set).
* If rendering fails, replace the relative path with a full raw URL, e.g.:
  `<source src="https://raw.githubusercontent.com/USER/REPO/BRANCH/docs/demo.mp4" type="video/mp4" />`
* Files >50 MB may require **Git LFS** (GitHub blocks >100 MB).

---

## Quick Start

```bash
npm install        # or: yarn
npx expo start     # i: iOS   a: Android   w: Web (limited)
```

### Firebase (Phone Auth)

Enable **Authentication → Sign-in method → Phone** in Firebase Console, then create `app/firebase/firebaseApp.js`:

```js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_PROJECT.firebaseapp.com',
  projectId: 'YOUR_PROJECT',
  storageBucket: 'YOUR_PROJECT.appspot.com',
  messagingSenderId: 'XXXXXXX',
  appId: '1:XXXXXXX:web:YYYYYYYYYYYYYYYY'
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
```

---

## Highlights

* **Live Usage:** real-time kWh, cost, CO₂e
* **Forecast:** month-to-date vs last month
* **Goals & Routines:** weekday/weekend targets, gentle nudges
* **Challenges & Groups:** private groups, badges, leaderboards
* **Clean UI Kit:** `PrimaryButton`, `GhostButton`, `TextField`, `OtpInput`, `ProgressDots`

---

## Navigation & Screens

* **Flows:** Onboarding → Auth → App Tabs
* **Tabs:** Home, Live, Insights, Community, Settings

```js
// Onboarding → Auth
navigation.getParent()?.navigate('AuthFlow', { screen: 'SignIn' });

// Auth → Tabs
navigation.getParent()?.reset({ index: 0, routes: [{ name: 'AppTabs' }] });
```

---

## Structure

```txt
app/
  components/      # OnboardingSlide, auth, form, ui
  firebase/        # firebaseApp.js, phoneAuth.js
  navigation/      # AppNavigator.js
  pages/
    Onboarding/{GetStarted,Intro,LiveUsage,Savings}/
    Auth/{SignIn,SignUp,ForgotPassword,VerificationCode,ResetPassword}/
    {Home,Live,Insights,Community,Settings}/
  styles/Color.js  # design tokens
```

---

## Theming

`app/styles/Color.js` centralizes the palette (primary `#008837`, primaryDark `#055124`, primaryLight `#CAE8BD`, background `#EEFAE9`, accent `#257180`, text `#0F172A`, muted `#64748B`, border `#E2E8F0`).

---

## Notes

* Keep OTPs out of logs; rate-limit resends; consider Firebase device checks / reCAPTCHA when required.
* Keep screens thin; push UI logic into shared components/layouts.

---

## License

MIT
