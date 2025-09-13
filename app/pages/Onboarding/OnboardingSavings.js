import { useNavigation } from '@react-navigation/native';
import OnboardingSlide from '../../components/OnboardingSlide';

export default function OnboardingSavings() {
  const navigation = useNavigation();
  const rootNav = navigation.getParent(); // RootStack

  const goSignIn = () => {
    rootNav?.navigate('AuthFlow', { screen: 'SignIn' });
  };

  const goSignUp = () => {
    rootNav?.navigate('AuthFlow', { screen: 'SignUp' });
  };

  return (
    <OnboardingSlide
      brandLogoSource={require('../../assets/Logo.png')}
      illustrationSource={require('../../assets/onboarding/Save.png')}
      title="Better together."
      body="Join friendly challenges at home, school, or work — and climb the leaderboard with real savings."
      caption="• Badges   • Weekly goals   • Leaderboards"
      activeIndex={2}
      totalDots={3}
      showDots
      primaryLabel="Sign In"
      onPrimary={goSignIn}
      primaryTestID="onboarding-savings-signin"
      secondaryLabel="Sign Up"
      onSecondary={goSignUp}
      secondaryTestID="onboarding-savings-signup"
      actionsLayout="column"
    />
  );
}
