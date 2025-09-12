import React from 'react';
import { Image, Pressable, SafeAreaView, StatusBar, Text, View } from 'react-native';
import styles from './OnboardingLiveUsageStyles';

const Dots = ({ active = 1 }) => (
  <View style={styles.dotsRow}>
    {[0, 1, 2].map(i => (
      <View key={i} style={[styles.dot, i === active && styles.dotActive]} />
    ))}
  </View>
);

const OnboardingLiveUsage = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.brandWrap}>
        <Image
          source={require('../../../assets/Logo.png')} style={styles.logo}
        />
      </View>

      <View style={styles.illustration}>
        <Image source={require('../../../assets/onboarding/Live.png')} style={styles.illustrationImg} />
      </View>

      <View style={styles.textWrap}>
        <Text style={styles.title}>Your energy at a glance</Text>
        <Text style={styles.body}>
          See live usage, cost, and CO₂e — always know where you stand.
        </Text>
        <Text style={styles.caption}>
          Clear cards and a weekly ring keep you on track.
        </Text>
        <Dots active={1} />
      </View>

      <Pressable
        testID="onboarding-live-next"
        onPress={() => navigation.navigate('OnboardingSavings')}
        style={({ pressed }) => [styles.primaryBtn, pressed && styles.btnPressed]}
        android_ripple={{ color: '#00000011' }}
      >
        <Text style={styles.primaryBtnText}>Next</Text>
      </Pressable>

      <Pressable
        testID="onboarding-live-skip"
        onPress={() => navigation.navigate('OnboardingSavings')}
        style={({ pressed }) => [styles.ghostBtn, pressed && styles.btnPressed]}
        android_ripple={{ color: '#00000011' }}
      >
        <Text style={styles.ghostBtnText}>Skip</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default OnboardingLiveUsage;
