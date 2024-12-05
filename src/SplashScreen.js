// src/SplashScreen.js
import React, { useEffect } from 'react';
import { View, Image, StyleSheet, StatusBar } from 'react-native';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    // Simulate a loading process (e.g., fetching data)
    setTimeout(() => {
      navigation.replace('MainDrawer'); // Navigate to the main drawer after 2 seconds
    }, 2000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Image
        source={require('../assets/logo.png')} // Ensure the path to your logo image is correct
        style={styles.logo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
});
