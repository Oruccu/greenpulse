# Fortum GreenPulse ⚡️

Modern **Expo + React Native** app for live energy tracking, bill & CO₂e forecasting, and savings through goals & challenges. Built with **React Navigation** and **Firebase Phone Auth (OTP)**. Clean, reusable UI components.

---

## Demo

GitHub README’lerinde **göreli yol** (ör. `app/assets/fortum.mov`) çoğu zaman video oynatmaz ve `.mov` bazı tarayıcılarda desteklenmez. En sağlam yöntem: **MP4 (H.264 + AAC)** ve **raw URL** kullanmak.

1. Videoyu MP4’e dönüştür → `docs/demo.mp4`

   ```bash
   ffmpeg -i app/assets/fortum.mov -vcodec libx264 -acodec aac -movflags +faststart -crf 23 docs/demo.mp4
   ```
2. README’ye şu etiketi koy:

   ```html
   <video width="100%" autoplay loop muted playsinline controls>
     <source src="docs/demo.mp4?raw=1" type="video/mp4" />
   </video>
   ```

   Alternatif (ham URL):

   ```html
   <video width="100%" autoplay loop muted playsinline controls>
     <source src="https://raw.githubusercontent.com/USER/REPO/BRANCH/docs/demo.mp4" type="video/mp4" />
   </video>
   ```

> Dosya büyükse Git LFS kullanmayı düşünün. Poster yedeği için `docs/demo-poster.png` ekleyebilirsiniz.

---

## Quick Start

```bash
npm install        # or: yarn
```

1. **Enable Phone Auth** in Firebase Console.
2. Create `app/firebase/firebaseApp.js` and initialize Firebase (API key, project id, etc.).
3. Run the app:

```bash
npx expo start   # i: iOS   a: Android   w: Web (limited)
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

`app/styles/Color.js` centralizes palette (primary, accent `#257180`, background, text, etc.).

---

## License

MIT
