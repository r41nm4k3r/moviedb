// src/SearchOverlay.js
import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, Image, StyleSheet, Modal, TouchableOpacity, Dimensions } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { searchContent } from './MovieService';

const { width } = Dimensions.get('window');
const numColumns = width > 600 ? 3 : 2;

export default function SearchOverlay({ visible, onClose, navigation }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      if (query) {
        const data = await searchContent(query);
        setResults(data);
      }
    };

    fetchResults();
  }, [query]);

  const renderGridItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.gridItem}
      onPress={() => {
        onClose();
        navigation.navigate('Details', { movieId: item.id }); // Adjust navigation as needed
      }}
    >
      {item.media_type === 'movie' && (
        <>
          <Image
            style={styles.poster}
            source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
          />
          <Text style={styles.title}>{item.title}</Text>
        </>
      )}
      {item.media_type === 'tv' && (
        <>
          <Image
            style={styles.poster}
            source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
          />
          <Text style={styles.title}>{item.name}</Text>
        </>
      )}
      {item.media_type === 'person' && (
        <>
          <Image
            style={styles.poster}
            source={{ uri: `https://image.tmdb.org/t/p/w500${item.profile_path}` }}
          />
          <Text style={styles.title}>{item.name}</Text>
        </>
      )}
    </TouchableOpacity>
  );

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.overlayContainer}>
        <View style={styles.header}>
          <TouchableOpacity onPress={onClose}>
            <Ionicons name="close" size={24} color="#000" />
          </TouchableOpacity>
          <Searchbar
            placeholder="Search"
            onChangeText={setQuery}
            value={query}
            icon="magnify"
            style={styles.searchbar}
          />
        </View>
        <FlatList
          data={results}
          renderItem={renderGridItem}
          keyExtractor={(item) => item.id.toString()}
          numColumns={numColumns}
          contentContainerStyle={styles.flatListContentContainer}
        />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlayContainer: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  searchbar: {
    flex: 1,
    marginLeft: 10,
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
});
