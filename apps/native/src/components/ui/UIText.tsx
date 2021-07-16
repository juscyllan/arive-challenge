import React, { ReactNode } from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';

import { Colors } from '../../theme';

type Props = TextProps & { children?: ReactNode };

const UIText = ({ style, ...props }: Props) => {
  return <Text style={[styles.base, style]} {...props} />;
};

const styles = StyleSheet.create({
  base: {
    fontSize: 14,
    color: Colors.textPrimary,
  },
});

export default UIText;
