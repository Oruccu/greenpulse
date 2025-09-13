// AppNavigator.js
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

// --- Onboarding screens ---
import OnboardingGetStarted from './pages/Onboarding/OnboardingGetStarted';
import OnboardingIntro from './pages/Onboarding/OnboardingIntro';
import OnboardingLiveUsage from './pages/Onboarding/OnboardingLiveUsage';
import OnboardingSavings from './pages/Onboarding/OnboardingSavings';

// --- Auth screens ---
import ForgotPassword from './pages/Auth/ForgotPassword/ForgotPassword';
import ResetPassword from './pages/Auth/ResetPassword/ResetPassword';
import SignIn from './pages/Auth/SignIn/SignIn';
import SignUp from './pages/Auth/SignUp/SignUp';
// DİKKAT: Klasör adı sizde "VerificationCode" olmayabilir.
// Dosya sisteminizde nasıl ise import'u O ŞEKİLDE yazın.
import VerificationCode from './pages/Auth/verificationCode/VerificationCode';

// --- App tabs ---
import Community from './pages/Community/Community';
import Home from './pages/Home/Home';
import Insights from './pages/Insights/Insights';
import Live from './pages/Live/Live';
import Settings from './pages/Settings/Settings';

// Navigators
const RootStack = createNativeStackNavigator();
const OnboardingStack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

/* ------------------------ Onboarding Flow ------------------------ */
function OnboardingStackNavigator() {
  return (
    <OnboardingStack.Navigator screenOptions={{ headerShown: false }} initialRouteName="OnboardingGetStarted">
      <OnboardingStack.Screen name="OnboardingGetStarted" component={OnboardingGetStarted} />
      <OnboardingStack.Screen name="OnboardingIntro" component={OnboardingIntro} />
      <OnboardingStack.Screen name="OnboardingLiveUsage" component={OnboardingLiveUsage} />
      <OnboardingStack.Screen name="OnboardingSavings" component={OnboardingSavings} />
    </OnboardingStack.Navigator>
  );
}

/* --------------------------- Auth Flow --------------------------- */
function AuthStackNavigator() {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }} initialRouteName="SignIn">
      <AuthStack.Screen name="SignIn" component={SignIn} />
      <AuthStack.Screen name="SignUp" component={SignUp} />
      <AuthStack.Screen name="VerificationCode" component={VerificationCode} />
      <AuthStack.Screen name="ForgotPassword" component={ForgotPassword} />
      <AuthStack.Screen name="ResetPassword" component={ResetPassword} />
    </AuthStack.Navigator>
  );
}

/* --------------------------- App Tabs --------------------------- */
function AppTabsNavigator() {
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Live" component={Live} />
      <Tab.Screen name="Insights" component={Insights} />
      <Tab.Screen name="Community" component={Community} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

/* --------------------------- Root Flow --------------------------- */
/**
 * Tüm flow'lar RootStack'te her zaman kayıtlı.
 * initialRouteName ile açılış akışını seçiyoruz.
 * Böylece Onboarding ekranlarından:
 *   navigation.getParent()?.navigate('AuthFlow', { screen: 'SignIn' })
 * diyerek sorunsuz geçiş yapılır.
 */
export default function AppNavigator({
  isSignedIn = false,
  hasCompletedOnboarding = false,
}) {
  const initialRouteName = !hasCompletedOnboarding
    ? 'OnboardingFlow'
    : (isSignedIn ? 'AppTabs' : 'AuthFlow');

  return (
    <RootStack.Navigator initialRouteName={initialRouteName} screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="OnboardingFlow" component={OnboardingStackNavigator} />
      <RootStack.Screen name="AuthFlow" component={AuthStackNavigator} />
      <RootStack.Screen name="AppTabs" component={AppTabsNavigator} />
    </RootStack.Navigator>
  );
}
