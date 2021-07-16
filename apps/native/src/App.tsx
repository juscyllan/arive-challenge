import React from 'react';
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';

import HomeScreen from './screens/HomeScreen';

const App = () => (
  <SafeAreaProvider initialMetrics={initialWindowMetrics}>
    <HomeScreen />
  </SafeAreaProvider>
);

export default App;
