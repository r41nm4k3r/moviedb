// src/GridComponent.js
import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const GridComponent = ({ data, numColumns, navigation }) => {
  const renderGridItem = ({ item }) => (
    <View style={styles.gridItem}>
      <Image
        style={styles.poster}
        source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
      />
      <Text style={styles.title}>{item.title || item.name}</Text>
      <TouchableOpacity
        style={styles.outlineButton}
        onPress={() => navigation.navigate('Details', { movieId: item.id })}
      >
        <Icon name="information-circle-outline" size={20} color="#6200ea" />
        <Text style={styles.outlineButtonText}> Details</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderGridItem}
      keyExtractor={(item) => item.id.toString()}
      numColumns={numColumns}
      contentContainerStyle={styles.flatListContentContainer}
    />
  );
};

const styles = StyleSheet.create({
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
  outlineButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#6200ea',
    borderWidth: 1,
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  outlineButtonText: {
    color: '#6200ea',
    fontSize: 14,
    marginLeft: 5,
  },
});

export default GridComponent;
