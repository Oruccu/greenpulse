# Fortum GreenPulse ⚡️

Modern **Expo + React Native** app for live energy tracking, bill & CO₂e forecasting, and savings through goals & challenges. Built with **React Navigation** and **Firebase Phone Auth (OTP)**. Clean, reusable UI components.

---

## Demo

Embed the repo video (auto‑play, muted). Put your file at `app/assets/fortum.mov`.

```html
<video width="100%" autoplay loop muted playsinline controls>
  <source src="app/assets/fortum.mov" type="video/quicktime" />
  <source src="docs/demo.mp4" type="video/mp4" />
</video>
```

> Note: GitHub auto‑play depends on the browser’s media policy; keeping **muted** ensures it plays inline.

---

## Quick Start

```bash
npm install        
```

1. **Enable Phone Auth** in Firebase Console.
2. Create `app/firebase/firebaseApp.js` and initialize Firebase (API key, project id, etc.).
3. Run the app:

```bash
npx expo start   
```

---

## Highlights

* **Live Usage:** real‑time kWh, cost, CO₂e
* **Forecast:** month‑to‑date vs last month
* **Goals & Routines:** weekday/weekend targets, gentle nudges
* **Challenges & Groups:** private groups, badges, leaderboards
* **Clean UI Kit:** `PrimaryButton`, `GhostButton`, `TextField`, `OtpInput`, `ProgressDots`

---

## Navigation & Screens

* **Flows:** Onboarding → Auth → App Tabs
* **Tabs:** Home, Live, Insights, Community, Settings

```js

navigation.getParent()?.navigate('AuthFlow', { screen: 'SignIn' });

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

`app/styles/Color.js` centralizes palette (primary, accent `#257180`, background, text, etc.).

---

## License

MIT
