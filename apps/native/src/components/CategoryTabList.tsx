import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { Units } from '../theme';
import CategoryTabItem from './CategoryTabItem';
import UISpan from './ui/UISpan';

type Props = {
  current: number;
  onChange?: (value: number) => void;
};

const Separator = () => <UISpan units={3} horizontal />;

const CategoryTabList = ({ current, onChange }: Props) => {
  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.list}
      horizontal
      data={['All Products', 'Shampoo', 'Hand Wash']}
      renderItem={({ item, index }) => (
        <CategoryTabItem
          active={index === current}
          title={item}
          onPress={() => onChange?.(index)}
        />
      )}
      ItemSeparatorComponent={Separator}
    />
  );
};

const styles = StyleSheet.create({
  container: { marginVertical: Units.base / 2 },
  list: {
    paddingHorizontal: Units.base,
  },
});

export default CategoryTabList;
