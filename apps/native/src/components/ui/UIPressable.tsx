import React, { ReactNode } from 'react';
import { Platform, Pressable, StyleProp, TouchableOpacity, ViewStyle } from 'react-native';

const PressableComponent = Platform.OS === 'ios' ? TouchableOpacity : Pressable;

type Props = {
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
  children?: ReactNode;
};

const UIPressable = ({ ...props }: Props) => {
  return <PressableComponent {...props} />;
};

export default UIPressable;
