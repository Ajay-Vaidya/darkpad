import React from 'react';
import App from './App';
import {SafeAreaView, useColorScheme} from 'react-native';

const Darkpad = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView>
      <App />
    </SafeAreaView>
  );
};
export default Darkpad;
