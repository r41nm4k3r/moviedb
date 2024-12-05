// src/TVSeriesScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, Dimensions } from 'react-native';
import { Button } from 'react-native-paper';
import { getTrendingTVSeries } from './MovieService';

const { width } = Dimensions.get('window');
const numColumns = width > 600 ? 3 : 2;

export default function TVSeriesScreen({ navigation }) {
  const [tvSeries, setTVSeries] = useState([]);

  useEffect(() => {
    const fetchTrendingTVSeries = async () => {
      const trendingTVSeries = await getTrendingTVSeries();
      setTVSeries(trendingTVSeries);
    };

    fetchTrendingTVSeries();
  }, []);

  const renderGridItem = ({ item }) => {
    console.log('Grid Item:', item); // Enhanced debug statement
    return (
      <View style={styles.gridItem}>
        <Image
          style={styles.poster}
          source={{ uri: item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : 'https://via.placeholder.com/150' }}
        />
        <Text style={styles.title}>{item.name || 'Untitled'}</Text>
        <Button
          mode="contained"
          buttonColor="#000"
          onPress={() => {
            console.log("Navigating to Details with tvSeriesId:", item.id); // Enhanced debug statement
            navigation.navigate('Details', { tvSeriesId: item.id });
          }}
          style={styles.button}
          labelStyle={styles.buttonLabel}
        >
          More
        </Button>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.sectionHeader}>Trending Tv Series</Text>
      <FlatList
        data={tvSeries}
        renderItem={renderGridItem}
        keyExtractor={(item) => item.id?.toString() || 'unknown'}
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
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20,
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
