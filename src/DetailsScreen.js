// src/DetailsScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { getMovieDetails, getMovieCast, getTVSeriesDetails, getTVSeriesCast } from './MovieService';

export default function DetailsScreen({ route, navigation }) {
  const { movieId, tvSeriesId } = route.params; // Retrieve movieId or tvSeriesId from route params
  const [details, setDetails] = useState(null);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    console.log("DetailsScreen received movieId:", movieId); // Enhanced debug statement
    console.log("DetailsScreen received tvSeriesId:", tvSeriesId); // Enhanced debug statement
    const fetchDetails = async () => {
      if (movieId) {
        console.log("Fetching movie details for movieId:", movieId); // Enhanced debug statement
        const movieDetails = await getMovieDetails(movieId);
        console.log("Fetched movie details:", movieDetails); // Enhanced debug statement
        setDetails(movieDetails);
        const movieCast = await getMovieCast(movieId);
        console.log("Fetched movie cast:", movieCast); // Enhanced debug statement
        setCast(movieCast);
      } else if (tvSeriesId) {
        console.log("Fetching TV series details for tvSeriesId:", tvSeriesId); // Enhanced debug statement
        const tvSeriesDetails = await getTVSeriesDetails(tvSeriesId);
        console.log("Fetched TV series details:", tvSeriesDetails); // Enhanced debug statement
        setDetails(tvSeriesDetails);
        const tvSeriesCast = await getTVSeriesCast(tvSeriesId);
        console.log("Fetched TV series cast:", tvSeriesCast); // Enhanced debug statement
        setCast(tvSeriesCast);
      }
    };

    fetchDetails();
  }, [movieId, tvSeriesId]);

  if (!details) {
    return <Text>Loading...</Text>;
  }

  const renderCastItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('ActorDetails', { actorId: item.id })}>
      <View style={styles.castItem}>
        <Image
          style={styles.castImage}
          source={{ uri: `https://image.tmdb.org/t/p/w500${item.profile_path}` }}
        />
        <Text style={styles.castName}>{item.name}</Text>
        <Text style={styles.castCharacter}>as {item.character}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Image
          style={styles.poster}
          source={{ uri: `https://image.tmdb.org/t/p/w500${details.poster_path}` }}
        />
        <Text style={styles.title}>{details.title || details.name}</Text>
        <Text style={styles.overview}>{details.overview}</Text>
        <Text style={styles.releaseDate}>Release Date: {details.release_date || details.first_air_date}</Text>
        <Text style={styles.rating}>Rating: {details.vote_average}</Text>
        <Text style={styles.castHeader}>Cast</Text>
        <FlatList
          data={cast}
          renderItem={renderCastItem}
          keyExtractor={(item, index) => item.cast_id?.toString() || index.toString()} // Handle undefined keys
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.castList}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
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
