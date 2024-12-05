// src/Header.js
import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Header({ onSearchToggle, isSearchActive, navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.openDrawer()}>
        <Icon name="menu-outline" size={30} color="#000" />
      </TouchableOpacity>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
      </View>
      <TouchableOpacity style={styles.iconContainer} onPress={onSearchToggle}>
        <Icon name={isSearchActive ? "close-outline" : "search-outline"} size={30} color="#000" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    height: 100,
    backgroundColor: '#fff',
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
  },
  logoContainer: {
    flex: 2,
    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 50,
  },
});
