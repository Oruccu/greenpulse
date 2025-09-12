import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

// --- Onboarding screens ---
import OnboardingGetStarted from './pages/Onboarding/GetStarted/OnboardingGetStarted';
import OnboardingIntro from './pages/Onboarding/Intro/OnboardingIntro';
import OnboardingLiveUsage from './pages/Onboarding/LiveUsage/OnboardingLiveUsage';
import OnboardingSavings from './pages/Onboarding/Savings/OnboardingSavings';

// --- Auth screens ---
import ForgotPassword from './pages/Auth/ForgotPassword/ForgotPassword';
import ResetPassword from './pages/Auth/ResetPassword/ResetPassword';
import SignIn from './pages/Auth/SignIn/SignIn';
import SignUp from './pages/Auth/SignUp/SignUp';
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


function OnboardingStackNavigator() {
  return (
    <OnboardingStack.Navigator
      screenOptions={{ headerShown: false }} initialRouteName="OnboardingGetStarted">
      <OnboardingStack.Screen
        name="OnboardingGetStarted"
        component={OnboardingGetStarted} />
      <OnboardingStack.Screen
        name="OnboardingIntro"
        component={OnboardingIntro} />
      <OnboardingStack.Screen
        name="OnboardingLiveUsage"
        component={OnboardingLiveUsage} />
      <OnboardingStack.Screen
        name="OnboardingSavings"
        component={OnboardingSavings} />
    </OnboardingStack.Navigator>
  );
}


function AuthStackNavigator() {
  return (
    <AuthStack.Navigator
      screenOptions={{ headerShown: false }} initialRouteName="SignIn">
      <AuthStack.Screen
        name="SignIn"
        component={SignIn}
      />
      <AuthStack.Screen
        name="SignUp"
        component={SignUp}
      />
      <AuthStack.Screen
        name="VerificationCode"
        component={VerificationCode}
      />
      <AuthStack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
      />
      <AuthStack.Screen
        name="ResetPassword"
        component={ResetPassword}
      />
    </AuthStack.Navigator>
  );
}


function AppTabsNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Live" component={Live} />
      <Tab.Screen name="Insights" component={Insights} />
      <Tab.Screen name="Community" component={Community} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

export default function AppNavigator({
  isSignedIn = false,
  hasCompletedOnboarding = false,
}) {
  const flowKey = `${hasCompletedOnboarding ? 'onbd:1' : 'onbd:0'}-${isSignedIn ? 'auth:1' : 'auth:0'}`;

  return (
    <RootStack.Navigator
      key={flowKey}
      screenOptions={{ headerShown: false }}
    >
      {!hasCompletedOnboarding ? (
        <RootStack.Screen
          name="OnboardingFlow"
          component={OnboardingStackNavigator}
        />
      ) : !isSignedIn ? (
        <RootStack.Screen
          name="AuthFlow"
          component={AuthStackNavigator}
        />
      ) : (
        <RootStack.Screen
          name="AppTabs"
          component={AppTabsNavigator}
        />
      )}
    </RootStack.Navigator>
  );
}
