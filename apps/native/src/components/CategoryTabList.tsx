import React, { useMemo } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { ApiSubCategory } from '../service/api.types';
import { Units } from '../theme';
import CategoryTabItem from './CategoryTabItem';
import UISpan from './ui/UISpan';

type Props = {
  data: ApiSubCategory[];
  current?: string;
  onChange?: (value?: string) => void;
};

const Separator = () => <UISpan units={3} horizontal />;

const CategoryTabList = ({ data, current, onChange }: Props) => {
  const computed = useMemo(() => {
    return [null, ...data];
  }, [data]);
  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.list}
      horizontal
      data={computed}
      keyExtractor={item => (item ? item.id : '*')}
      renderItem={({ item }) =>
        item ? (
          <CategoryTabItem
            active={item.id === current}
            title={item.name}
            onPress={() => onChange?.(item.id)}
          />
        ) : (
          <CategoryTabItem active={!current} title="All Products" onPress={() => onChange?.()} />
        )
      }
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
