import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

import { Units } from '../theme';
import UIPressable from './ui/UIPressable';
import UIText from './ui/UIText';

type Props = {
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
};

const ProductGridEntry = ({ style, onPress }: Props) => {
  return (
    <UIPressable style={style} onPress={onPress}>
      <View style={styles.imageWrapper} />

      <UIText style={styles.category}>Marvis</UIText>
      <UIText style={styles.name}>Marvis Whitening Mint Toothpaste</UIText>
      <UIText style={styles.price}>9,95 €</UIText>
    </UIPressable>
  );
};

const styles = StyleSheet.create({
  imageWrapper: {
    backgroundColor: '#eee',
    borderRadius: Units.radius,
    aspectRatio: 1,
    width: '100%',
    marginBottom: 4,
  },
  category: {
    fontSize: 13,
    color: '#999',
    fontWeight: '700',
    marginVertical: 4,
  },
  name: {
    fontWeight: '500',
    marginBottom: 4,
  },
  price: {
    fontSize: 18,
    fontWeight: '700',
  },
});

export default ProductGridEntry;
