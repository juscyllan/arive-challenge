import React from 'react';
import { FlatList } from 'react-native';

import CategoryPageHeader from '../components/CategoryPageHeader';

const HomeScreen = () => {
  return (
    <FlatList
      style={{ marginTop: 30 }}
      data={[1, 2, 3, 4, 5, 6, 7]}
      keyExtractor={i => `${i}`}
      renderItem={() => null}
      ListHeaderComponent={<CategoryPageHeader title="Personal Care" />}
    />
  );
};

export default HomeScreen;
