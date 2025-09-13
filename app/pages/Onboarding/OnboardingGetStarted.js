import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Image, StatusBar, StyleSheet, View } from 'react-native';
import Color from '../../styles/Color';

export default function OnboardingGetStarted() {
  const navigation = useNavigation();

  useEffect(() => {
    const t = setTimeout(() => {
      // Back'e basınca splash'a dönmesin diye replace
      navigation.replace('OnboardingIntro');
    }, 3000);
    return () => clearTimeout(t);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Image
        source={require('../../assets/LogoIntro.png')}
        style={styles.logo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.primaryLight, // ekrandaki örnekle aynı tona yakın
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 260,
    height: 120,
    resizeMode: 'contain',
  },
});
