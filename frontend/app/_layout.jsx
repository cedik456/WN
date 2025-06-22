import { SafeAreaView } from 'react-native';
import React from 'react';
import { Slot } from 'expo-router';
import '../global.css';

const RootLayout = () => {
  return (
    <SafeAreaView
      className="flex-1 bg-white"
      edges={['left', 'right', 'bottom', 'top']}
    >
      <Slot />
    </SafeAreaView>
  );
};

export default RootLayout;
