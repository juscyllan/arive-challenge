import React from 'react';
import { ActivityIndicator, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

type Props = {
  style?: StyleProp<ViewStyle>;
};

const UILoading = ({ style }: Props) => (
  <View style={[styles.container, style]}>
    <ActivityIndicator />
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default UILoading;
