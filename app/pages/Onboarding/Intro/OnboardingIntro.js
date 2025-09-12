import React from 'react';
import { Image, Pressable, SafeAreaView, StatusBar, Text, View } from 'react-native';
import styles from './OnboardingIntroStyles';

const Dots = ({ active = 0 }) => (
  <View style={styles.dotsRow}>
    {[0, 1, 2].map(i => (
      <View key={i} style={[styles.dot, i === active && styles.dotActive]} />
    ))}
  </View>
);

const OnboardingIntro = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.brandWrap}>
       <Image source={require('../../../assets/Logo.png')} style={styles.logo} /> 
      </View>

      <View style={styles.illustration}>
        <Image source={require('../../../assets/onboarding/Intro.png')} style={styles.illustrationImg} /> 
      </View>

      <View style={styles.textWrap}>
        <Text style={styles.title}>Use Less. Live Green.</Text>
        <Text style={styles.body}>
          Track energy in real time. Lower bills and CO₂e with small weekly actions.
        </Text>
        <Text style={styles.caption}>
          Calm Nordic lake, subtle aurora, leaf-lightning energy mark.
        </Text>
        <Dots active={0} />
      </View>

      <Pressable
        testID="onboarding-intro-next"
        onPress={() => navigation.navigate('OnboardingLiveUsage')}
        style={({ pressed }) => [styles.primaryBtn, pressed && styles.btnPressed]}
        android_ripple={{ color: '#00000011' }}
      >
        <Text style={styles.primaryBtnText}>Next</Text>
      </Pressable>

      <Pressable
        testID="onboarding-intro-skip"
        onPress={() => navigation.navigate('OnboardingSavings')}
        style={({ pressed }) => [styles.ghostBtn, pressed && styles.btnPressed]}
        android_ripple={{ color: '#00000011' }}
      >
        <Text style={styles.ghostBtnText}>Skip</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default OnboardingIntro;
