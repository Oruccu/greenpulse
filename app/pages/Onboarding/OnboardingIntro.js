import { useNavigation } from '@react-navigation/native';
import React from 'react';
import OnboardingSlide from '../../components/OnboardingSlide';

export default function OnboardingIntro() {
  const navigation = useNavigation();
  return (
    <OnboardingSlide 
      brandLogoSource={require('../../assets/Logo.png')}
      illustrationSource={require('../../assets/onboarding/Intro.png')}
      title="Use Less. Live Green."
      body="Track energy in real time. Lower bills and CO₂e with small weekly actions."
      caption="Calm Nordic lake, subtle aurora, leaf-lightning energy mark."
      activeIndex={0}
      totalDots={3}
      showDots
      primaryLabel="Next"
      onPrimary={() => navigation.navigate('OnboardingLiveUsage')}
      primaryTestID="onboarding-intro-next"
      secondaryLabel="Skip"
      onSecondary={() => navigation.navigate('OnboardingSavings')}
      secondaryTestID="onboarding-intro-skip"
      actionsLayout="column"
    />
  );
}
