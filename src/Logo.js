// src/Logo.js
import React from 'react';
import { Image, StyleSheet } from 'react-native';

export default function Logo() {
  return (
    <Image 
      source={require('../assets/logo.png')} // Ensure the path to your logo image is correct
      style={styles.logo} 
    />
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginVertical: 20,
  },
});
