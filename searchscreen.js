import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons'; // Import Feather icon

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (text) => {
    setSearchQuery(text);
    // Perform search or filter functionality here based on the searchQuery
  };

  // Sample latest book names
  const latestBooks = [
    { name: 'Kite Runner', icon: 'book' },
    { name: 'Thousand Splendid Suns', icon: 'book-open' },
    { name: 'Secret', icon: 'bookmark' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.appName}>BookWorm Heaven</Text>
      <View style={styles.searchContainer}>
        <Feather name="search" size={24} color="black" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={searchQuery}
          onChangeText={handleSearch}
        />
      </View>
      <View style={styles.bookList}>
        {latestBooks.map((book, index) => (
          <View key={index} style={styles.bookItem}>
            <Feather name={book.icon} size={24} color="#FF69B4" />
            <Text style={styles.bookName}>{book.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 50,
    backgroundColor: '#FFB6C1', // Lightest pink background color
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    paddingLeft: 10,
  },
  icon: {
    marginRight: 10,
  },
  bookList: {
    alignItems: 'center',
  },
  bookItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  bookName: {
    fontSize: 18,
    marginLeft: 10,
  },
});

export default SearchScreen;
