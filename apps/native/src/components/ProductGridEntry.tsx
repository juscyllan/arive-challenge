import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

import { ApiProduct } from '../service/api.types';
import { Units } from '../theme';
import UIPressable from './ui/UIPressable';
import UIText from './ui/UIText';

type Props = {
  style?: StyleProp<ViewStyle>;
  product: ApiProduct;
  onPress?: () => void;
};

const ProductGridEntry = ({ style, product, onPress }: Props) => {
  return (
    <UIPressable style={style} onPress={onPress}>
      <View style={styles.imageWrapper} />

      <UIText style={styles.category}>{product.brand.name}</UIText>
      <UIText style={styles.name}>{product.name}</UIText>
      <UIText style={styles.price}>{product.price} €</UIText>
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
