import { useNavigation } from '@react-navigation/native';
import OnboardingSlide from '../../components/OnboardingSlide';

export default function OnboardingLiveUsage() {
  const navigation = useNavigation();
  return (
    <OnboardingSlide
      brandLogoSource={require('../../assets/Logo.png')}
      illustrationSource={require('../../assets/onboarding/Live.png')}
      title="Your energy at a glance"
      body="See live usage, cost, and CO₂e — always know where you stand."
      caption="Clear cards and a weekly ring keep you on track."
      activeIndex={1}
      totalDots={3}
      showDots
      primaryLabel="Next"
      onPrimary={() => navigation.navigate('OnboardingSavings')}
      primaryTestID="onboarding-live-next"
      secondaryLabel="Skip"
      onSecondary={() => navigation.navigate('OnboardingSavings')}
      secondaryTestID="onboarding-live-skip"
      actionsLayout="column"
    />
  );
}
