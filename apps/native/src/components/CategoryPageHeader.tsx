import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import { Units } from '../theme';
import UIText from './ui/UIText';

type Props = {
  title: string;
  backgroundUri?: string;
};

const CategoryPageHeader = ({ title, backgroundUri }: Props) => {
  return (
    <View style={styles.container}>
      {backgroundUri ? (
        <Image source={{ uri: backgroundUri }} style={styles.placeholder} />
      ) : (
        <View style={styles.placeholder} />
      )}
      <UIText style={styles.title}>{title}</UIText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: Units.base,
    justifyContent: 'center',
    minHeight: 220,
  },
  placeholder: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#999',
    padding: Units.base,
    borderRadius: Units.radius,
    zIndex: -1,
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    textAlign: 'center',
    color: '#fff',
  },
});

export default CategoryPageHeader;
