// src/HomeScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, Dimensions } from 'react-native';
import { Button } from 'react-native-paper';
import { getCurrentMovies } from './MovieService';

const { width } = Dimensions.get('window');
const numColumns = width > 600 ? 3 : 2;

export default function HomeScreen({ navigation }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const movies = await getCurrentMovies();
      setMovies(movies);
    };

    fetchMovies();
  }, []);

  const renderGridItem = ({ item }) => (
    <View style={styles.gridItem}>
      <Image
        style={styles.poster}
        source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
      />
      <Text style={styles.title}>{item.title}</Text>
      <Button
        mode="contained"
        buttonColor="#000"
        onPress={() => navigation.navigate('Details', { movieId: item.id })}
        style={styles.button}
        labelStyle={styles.buttonLabel}
      >
        More
      </Button>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.sectionHeader}>Now Playing</Text>
      <FlatList
        data={movies}
        renderItem={renderGridItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={numColumns}
        contentContainerStyle={styles.flatListContentContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  sectionHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  flatListContentContainer: {
    paddingBottom: 10,
  },
  gridItem: {
    flex: 1,
    margin: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
  },
  poster: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  button: {
    marginTop: 10,
    borderRadius: 4,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 14,
  },
});
