import React from 'react';
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';
import { QueryClientProvider } from 'react-query';

import HomeScreen from './screens/HomeScreen';
import { client } from './service/api';

const App = () => (
  <SafeAreaProvider initialMetrics={initialWindowMetrics}>
    <QueryClientProvider client={client}>
      <HomeScreen />
    </QueryClientProvider>
  </SafeAreaProvider>
);

export default App;
