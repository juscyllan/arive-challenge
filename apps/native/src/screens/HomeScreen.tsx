import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import CategoryPageHeader from '../components/CategoryPageHeader';

const HomeScreen = () => {
  const { top } = useSafeAreaInsets();
  const [currentCategory, setCurrentCategory] = useState(0);
  return (
    <FlatList
      style={{ marginTop: top }}
      data={[1, 2, 3, 4, 5, 6, 7]}
      keyExtractor={i => `${i}`}
      renderItem={() => null}
      ListHeaderComponent={
        <>
          <CategoryPageHeader title="Personal Care" />
          <CategoryTabList current={currentCategory} />
        </>
      }
    />
  );
};

export default HomeScreen;
