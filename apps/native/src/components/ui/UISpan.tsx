import React from 'react';
import { View } from 'react-native';

type Props = {
  units?: number;
  horizontal?: boolean;
};

const BASE = 4;

const UISpan = ({ units = 4, horizontal }: Props) => {
  const style = { [horizontal ? 'width' : 'height']: units * BASE };
  return <View style={style} />;
};

export default UISpan;
