import React from 'react';
import { Image, Pressable, StatusBar, Text, View } from 'react-native';
import styles from './OnboardingGetStartedStyles';

const OnboardingGetStarted = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.centerWrap}>
        <Image
          source={require('../../../assets/LogoIntro.png')} style={styles.logo}
        />
      </View>

      <Pressable
        testID="onboarding-start-next"
        onPress={() => navigation.navigate('OnboardingIntro')}
        style={({ pressed }) => [styles.primaryBtn, pressed && styles.btnPressed]}
        android_ripple={{ color: '#00000011' }}
      >
        <Text style={styles.primaryBtnText}>Next</Text>
      </Pressable>

      <Pressable
        testID="onboarding-start-skip"
        onPress={() => navigation.navigate('OnboardingSavings')}
        style={({ pressed }) => [styles.ghostBtn, pressed && styles.btnPressed]}
        android_ripple={{ color: '#00000011' }}
      >
        <Text style={styles.ghostBtnText}>Skip</Text>
      </Pressable>
    </View>
  );
};

export default OnboardingGetStarted;
