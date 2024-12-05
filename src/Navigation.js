// src/Navigation.js
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './HomeScreen';
import MoviesScreen from './MoviesScreen';
import TVSeriesScreen from './TVSeriesScreen';
import SettingsScreen from './SettingsScreen';
import DetailsScreen from './DetailsScreen';
import ActorDetailsScreen from './ActorDetailsScreen';
import CustomDrawerContent from './CustomDrawerContent';
import SearchOverlay from './SearchOverlay'; // Import SearchOverlay

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function HomeStack({ navigation, toggleTheme, isDarkTheme, toggleSearchOverlay }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: isDarkTheme ? '#333' : '#fff',
          },
          headerTintColor: isDarkTheme ? '#fff' : '#000',
        }}
      />
      <Stack.Screen
        name="ActorDetails"
        component={ActorDetailsScreen}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: isDarkTheme ? '#333' : '#fff',
          },
          headerTintColor: isDarkTheme ? '#fff' : '#000',
        }}
      />
    </Stack.Navigator>
  );
}

function MoviesStack({ navigation, toggleTheme, isDarkTheme, toggleSearchOverlay }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Movies"
        component={MoviesScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: isDarkTheme ? '#333' : '#fff',
          },
          headerTintColor: isDarkTheme ? '#fff' : '#000',
        }}
      />
      <Stack.Screen
        name="ActorDetails"
        component={ActorDetailsScreen}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: isDarkTheme ? '#333' : '#fff',
          },
          headerTintColor: isDarkTheme ? '#fff' : '#000',
        }}
      />
    </Stack.Navigator>
  );
}

function TVStack({ navigation, toggleTheme, isDarkTheme, toggleSearchOverlay }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TV Series"
        component={TVSeriesScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: isDarkTheme ? '#333' : '#fff',
          },
          headerTintColor: isDarkTheme ? '#fff' : '#000',
        }}
      />
      <Stack.Screen
        name="ActorDetails"
        component={ActorDetailsScreen}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: isDarkTheme ? '#333' : '#fff',
          },
          headerTintColor: isDarkTheme ? '#fff' : '#000',
        }}
      />
    </Stack.Navigator>
  );
}

export default function Navigation() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const toggleSearchOverlay = () => {
    setSearchVisible(!searchVisible);
  };

  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
        <Drawer.Screen
          name="Home"
          component={(props) => <HomeStack {...props} toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} toggleSearchOverlay={toggleSearchOverlay} />}
          options={{
            headerShown: true,
            title: 'Home',
            headerStyle: {
              backgroundColor: isDarkTheme ? '#333' : '#f4511e',
            },
            headerTintColor: isDarkTheme ? '#fff' : '#000',
            headerRight: () => (
              <View style={{ flexDirection: 'row', marginRight: 15 }}>
                <TouchableOpacity onPress={toggleTheme} style={{ marginRight: 15 }}>
                  <Ionicons name={isDarkTheme ? 'sunny' : 'moon'} size={24} color={isDarkTheme ? '#fff' : '#000'} />
                </TouchableOpacity>
                <TouchableOpacity onPress={toggleSearchOverlay}>
                  <Ionicons name="search" size={24} color={isDarkTheme ? '#fff' : '#000'} />
                </TouchableOpacity>
              </View>
            ),
          }}
        />
        <Drawer.Screen
          name="Movies"
          component={(props) => <MoviesStack {...props} toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} toggleSearchOverlay={toggleSearchOverlay} />}
          options={{
            headerShown: true,
            title: 'Movies',
            headerStyle: {
              backgroundColor: isDarkTheme ? '#333' : '#009688',
            },
            headerTintColor: isDarkTheme ? '#fff' : '#000',
            headerRight: () => (
              <View style={{ flexDirection: 'row', marginRight: 15 }}>
                <TouchableOpacity onPress={toggleTheme} style={{ marginRight: 15 }}>
                  <Ionicons name={isDarkTheme ? 'sunny' : 'moon'} size={24} color={isDarkTheme ? '#fff' : '#000'} />
                </TouchableOpacity>
                <TouchableOpacity onPress={toggleSearchOverlay}>
                  <Ionicons name="search" size={24} color={isDarkTheme ? '#fff' : '#000'} />
                </TouchableOpacity>
              </View>
            ),
          }}
        />
        <Drawer.Screen
          name="TV Series"
          component={(props) => <TVStack {...props} toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} toggleSearchOverlay={toggleSearchOverlay} />}
          options={{
            headerShown: true,
            title: 'TV Series',
            headerStyle: {
              backgroundColor: isDarkTheme ? '#333' : '#3f51b5',
            },
            headerTintColor: isDarkTheme ? '#fff' : '#000',
            headerRight: () => (
              <View style={{ flexDirection: 'row', marginRight: 15 }}>
                <TouchableOpacity onPress={toggleTheme} style={{ marginRight: 15 }}>
                  <Ionicons name={isDarkTheme ? 'sunny' : 'moon'} size={24} color={isDarkTheme ? '#fff' : '#000'} />
                </TouchableOpacity>
                <TouchableOpacity onPress={toggleSearchOverlay}>
                  <Ionicons name="search" size={24} color={isDarkTheme ? '#fff' : '#000'} />
                </TouchableOpacity>
              </View>
            ),
          }}
        />
        <Drawer.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            headerShown: true,
            title: 'Settings',
            headerStyle: {
              backgroundColor: isDarkTheme ? '#333' : '#4caf50',
            },
            headerTintColor: isDarkTheme ? '#fff' : '#000',
            headerRight: () => (
              <View style={{ flexDirection: 'row', marginRight: 15 }}>
                <TouchableOpacity onPress={toggleTheme} style={{ marginRight: 15 }}>
                  <Ionicons name={isDarkTheme ? 'sunny' : 'moon'} size={24} color={isDarkTheme ? '#fff' : '#000'} />
                </TouchableOpacity>
                <TouchableOpacity onPress={toggleSearchOverlay}>
                  <Ionicons name="search" size={24} color={isDarkTheme ? '#fff' : '#000'} />
                </TouchableOpacity>
              </View>
            ),
          }}
        />
      </Drawer.Navigator>
      <SearchOverlay visible={searchVisible} onClose={toggleSearchOverlay} navigation={navigation} />
    </NavigationContainer>
  );
}
