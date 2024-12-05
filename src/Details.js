// src/DetailsScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import { getMovieDetails, getMovieCast } from './MovieService';

export default function DetailsScreen({ route }) {
  const { movieId } = route.params;  // Retrieve movieId from route params
  const [movieDetails, setMovieDetails] = useState(null);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const details = await getMovieDetails(movieId);
      setMovieDetails(details);
    };

    const fetchMovieCast = async () => {
      const cast = await getMovieCast(movieId);
      setCast(cast);
    };

    fetchMovieDetails();
    fetchMovieCast();
  }, [movieId]);

  if (!movieDetails) {
    return <Text>Loading...</Text>;
  }

  const renderCastItem = ({ item }) => (
    <View style={styles.castItem}>
      <Image
        style={styles.castImage}
        source={{ uri: `https://image.tmdb.org/t/p/w500${item.profile_path}` }}
      />
      <Text style={styles.castName}>{item.name}</Text>
      <Text style={styles.castCharacter}>as {item.character}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Image
        style={styles.poster}
        source={{ uri: `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}` }}
      />
      <Text style={styles.title}>{movieDetails.title}</Text>
      <Text style={styles.overview}>{movieDetails.overview}</Text>
      <Text style={styles.releaseDate}>Release Date: {movieDetails.release_date}</Text>
      <Text style={styles.rating}>Rating: {movieDetails.vote_average}</Text>
      <Text style={styles.castHeader}>Cast</Text>
      <FlatList
        data={cast}
        renderItem={renderCastItem}
        keyExtractor={(item) => item.cast_id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.castList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  poster: {
    width: '100%',
    height: 300,
    borderRadius: 8,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  overview: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  releaseDate: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  rating: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  castHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  castList: {
    marginTop: 10,
  },
  castItem: {
    marginRight: 15,
    alignItems: 'center',
  },
  castImage: {
    width: 80,
    height: 120,
    borderRadius: 8,
    marginBottom: 5,
  },
  castName: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  castCharacter: {
    fontSize: 14,
    textAlign: 'center',
  },
});
