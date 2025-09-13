import React from 'react';
import { Image, SafeAreaView, StatusBar, Text, View } from 'react-native';
import styles from './OnboardingSlideStyles';

import { GhostButton, PrimaryButton, ProgressDots } from '../ui';

export default function OnboardingSlide({
  brandLogoSource,
  illustrationSource,
  title,
  body,
  caption,
  activeIndex = 0,
  totalDots = 3,
  showDots = true,
  primaryLabel,
  onPrimary,
  primaryTestID,
  secondaryLabel,
  onSecondary,
  secondaryTestID,
  actionsLayout = 'column',
}) {
  const isRow = actionsLayout === 'row';

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {brandLogoSource ? (
        <View style={styles.brandWrap}>
          <Image source={brandLogoSource} style={styles.logo} />
        </View>
      ) : null}

      {illustrationSource ? (
        <View style={styles.illustration}>
          <Image source={illustrationSource} style={styles.illustrationImg} />
        </View>
      ) : null}

      <View style={styles.textWrap}>
        {!!title && <Text style={styles.title}>{title}</Text>}
        {!!body && <Text style={styles.body}>{body}</Text>}
        {!!caption && <Text style={styles.caption}>{caption}</Text>}
        <ProgressDots active={activeIndex} total={totalDots} visible={showDots} />
      </View>

      <View style={[styles.actions, isRow && styles.actionsRow]}>
        {secondaryLabel && onSecondary ? (
          <GhostButton
            title={secondaryLabel}
            onPress={onSecondary}
            testID={secondaryTestID}
            style={isRow && styles.rowItem}
          />
        ) : null}

        {primaryLabel && onPrimary ? (
          <PrimaryButton
            title={primaryLabel}
            onPress={onPrimary}
            testID={primaryTestID}
            style={isRow && styles.rowItem}
          />
        ) : null}
      </View>
    </SafeAreaView>
  );
}
