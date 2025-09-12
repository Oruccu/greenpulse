import React from 'react';
import { Image, Pressable, SafeAreaView, StatusBar, Text, View } from 'react-native';
import styles from './OnboardingSavingsStyles';

const Dots = ({ active = 2 }) => (
  <View style={styles.dotsRow}>
    {[0, 1, 2].map(i => (
      <View key={i} style={[styles.dot, i === active && styles.dotActive]} />
    ))}
  </View>
);

const OnboardingSavings = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.brandWrap}>
        <Image
          source={require('../../../assets/Logo.png')} style={styles.logo}
        />
      </View>

      <View style={styles.illustration}>
        <Image source={require('../../../assets/onboarding/Save.png')} style={styles.illustrationImg} />
      </View>

      <View style={styles.textWrap}>
        <Text style={styles.title}>Better together.</Text>
        <Text style={styles.body}>
          Join friendly challenges at home, school, or work — and climb the leaderboard with real savings.
        </Text>
        <Text style={styles.bullets}>• Badges   • Weekly goals   • Leaderboards</Text>
        <Dots active={2} />
      </View>

      <Pressable
        testID="onboarding-savings-signin"
        onPress={() => navigation.navigate('SignIn')}
        style={({ pressed }) => [styles.primaryBtn, pressed && styles.btnPressed]}
        android_ripple={{ color: '#00000011' }}
      >
        <Text style={styles.primaryBtnText}>Sign In</Text>
      </Pressable>

      <Pressable
        testID="onboarding-savings-signup"
        onPress={() => navigation.navigate('SignUp')}
        style={({ pressed }) => [styles.ghostBtn, pressed && styles.btnPressed]}
        android_ripple={{ color: '#00000011' }}
      >
        <Text style={styles.ghostBtnText}>Sign Up</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default OnboardingSavings;
