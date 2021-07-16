import React, { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useQuery } from 'react-query';

import CategoryPageHeader from '../components/CategoryPageHeader';
import CategoryTabList from '../components/CategoryTabList';
import ProductGridEntry from '../components/ProductGridEntry';
import UILoading from '../components/ui/UILoading';
import UISpan from '../components/ui/UISpan';
import { getCategoryDetails, getProducts } from '../service/api';
import { Units } from '../theme';

const HomeScreen = () => {
  const { top } = useSafeAreaInsets();
  const [currentCategory, setCurrentCategory] = useState<string>();

  const cat = useQuery('category', getCategoryDetails);
  const products = useQuery(['products', currentCategory], () => getProducts(currentCategory));
  if (!cat.data || cat.isLoading) return <UILoading style={{ marginTop: top }} />;

  return (
    <FlatList
      style={{ marginTop: top }}
      data={products.data}
      numColumns={2}
      keyExtractor={i => `${i.id}`}
      renderItem={({ item }) => <ProductGridEntry style={styles.entry} product={item} />}
      columnWrapperStyle={styles.column}
      ListEmptyComponent={products.isLoading ? <UILoading /> : null}
      ListHeaderComponent={
        <>
          <CategoryPageHeader title={cat.data.name} />
          <CategoryTabList
            data={cat.data.subCategories}
            current={currentCategory}
            onChange={setCurrentCategory}
          />
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
