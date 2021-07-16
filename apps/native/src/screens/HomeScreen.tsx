import React, { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import CategoryPageHeader from '../components/CategoryPageHeader';
import CategoryTabList from '../components/CategoryTabList';
import ProductGridEntry from '../components/ProductGridEntry';
import UISpan from '../components/ui/UISpan';
import { Units } from '../theme';

const HomeScreen = () => {
  const { top } = useSafeAreaInsets();
  const [currentCategory, setCurrentCategory] = useState(0);
  return (
    <FlatList
      style={{ marginTop: top }}
      data={[1, 2, 3, 4, 5, 6, 7, 8]}
      numColumns={2}
      keyExtractor={i => `${i}`}
      renderItem={() => <ProductGridEntry style={styles.entry} />}
      columnWrapperStyle={styles.column}
      ListHeaderComponent={
        <>
          <CategoryPageHeader title="Personal Care" />
          <CategoryTabList current={currentCategory} onChange={setCurrentCategory} />
          <UISpan units={2} />
        </>
      }
    />
  );
};

const styles = StyleSheet.create({
  column: { paddingHorizontal: Units.base * 0.5 },
  entry: { flex: 1, padding: Units.base * 0.5 },
});

export default HomeScreen;
