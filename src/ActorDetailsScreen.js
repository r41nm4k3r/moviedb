// src/ActorDetailsScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { getActorDetails, getActorFilmography } from './MovieService';

export default function ActorDetailsScreen({ route, navigation }) {
  const { actorId } = route.params; // Retrieve actorId from route params
  const [actorDetails, setActorDetails] = useState(null);
  const [filmography, setFilmography] = useState([]);

  useEffect(() => {
    const fetchActorDetails = async () => {
      const details = await getActorDetails(actorId);
      setActorDetails(details);
    };

    const fetchActorFilmography = async () => {
      const filmography = await getActorFilmography(actorId);
      setFilmography(filmography);
    };

    fetchActorDetails();
    fetchActorFilmography();
  }, [actorId]);

  if (!actorDetails) {
    return <Text>Loading...</Text>;
  }

  const renderFilmItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Details', { movieId: item.id })}>
      <View style={styles.filmItem}>
        <Image
          style={styles.filmPoster}
          source={{ uri: item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : 'https://via.placeholder.com/150' }}
        />
        <Text style={styles.filmTitle}>{item.title || 'Untitled'}</Text>
        <Text style={styles.character}>as {item.character}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        style={styles.profileImage}
        source={{ uri: `https://image.tmdb.org/t/p/w500${actorDetails.profile_path}` }}
      />
      <Text style={styles.name}>{actorDetails.name}</Text>
      <Text style={styles.biography}>{actorDetails.biography}</Text>
      <Text style={styles.birthday}>Birthday: {actorDetails.birthday}</Text>
      <Text style={styles.placeOfBirth}>Place of Birth: {actorDetails.place_of_birth}</Text>
      <Text style={styles.filmographyHeader}>Filmography</Text>
      <FlatList
        data={filmography}
        renderItem={renderFilmItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.filmList}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    alignItems: 'center',
  },
  profileImage: {
    width: 200,
    height: 300,
    borderRadius: 8,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  biography: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  birthday: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  placeOfBirth: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  filmographyHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  filmList: {
    marginTop: 10,
  },
  filmItem: {
    marginRight: 15,
    alignItems: 'center',
  },
  filmPoster: {
    width: 100,
    height: 150,
    borderRadius: 8,
    marginBottom: 5,
  },
  filmTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  character: {
    fontSize: 14,
    textAlign: 'center',
  },
});
