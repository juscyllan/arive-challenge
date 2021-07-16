import React from 'react';
import { StyleSheet } from 'react-native';

import { Colors, Units } from '../theme';
import UIPressable from './ui/UIPressable';
import UIText from './ui/UIText';

type Props = {
  title: string;
  onPress?: () => void;
  active?: boolean;
};

const CategoryTabItem = ({ active, title, onPress }: Props) => (
  <UIPressable onPress={onPress} style={[styles.container, active && styles.containerActive]}>
    <UIText style={[styles.title, active && styles.titleActive]}>{title}</UIText>
  </UIPressable>
);

const styles = StyleSheet.create({
  container: {
    paddingVertical: Units.base,
    backgroundColor: '#f0f0f0',
    borderRadius: Units.radius,
  },
  title: {
    textAlign: 'center',
    fontWeight: '600',
    paddingHorizontal: Units.base / 2,
  },

  containerActive: { backgroundColor: Colors.primary },
  titleActive: { color: '#fff' },
});

export default CategoryTabItem;
