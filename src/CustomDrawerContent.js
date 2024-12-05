// src/CustomDrawerContent.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import Logo from './Logo'; // Import the Logo component

export default function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View>
        <Logo /> {/* Add the logo at the top */}
      </View>
      <DrawerItem
        label="Home"
        icon={() => <Ionicons name="home-outline" size={22} />}
        onPress={() => props.navigation.navigate('Home')}
      />
      <DrawerItem
        label="Movies"
        icon={() => <Ionicons name="film-outline" size={22} />}
        onPress={() => props.navigation.navigate('Movies')}
      />
      <DrawerItem
        label="TV Series"
        icon={() => <Ionicons name="tv-outline" size={22} />}
        onPress={() => props.navigation.navigate('TV Series')}
      />
      <DrawerItem
        label="Settings"
        icon={() => <Ionicons name="settings-outline" size={22} />}
        onPress={() => props.navigation.navigate('Settings')}
      />
      {/* Add the copyright message */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Powered by Nny © 2024 </Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Made
        <Text style={styles.footerText}>with</Text>
          <Ionicons name="logo-react" size={15} color='#517fa4'/> 
          <Text style={styles.footerText}>and</Text>
          <Ionicons name="heart" size={15} color='#f50'/>
        </Text>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  footer: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#888',
    paddingHorizontal: 5,
  },
});
