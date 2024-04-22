import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const UpdatesScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.bookContainer}>
        <Text style={styles.title}>Trending Books</Text>
        <View style={styles.itemContainer}>
          <Feather name="book" size={24} color="black" />
          <View style={styles.itemText}>
            <Text style={styles.itemTitle}>The FountainHead</Text>
            <Text style={styles.itemDescription}>Updated 3 days ago</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <Feather name="book" size={24} color="black" />
          <View style={styles.itemText}>
            <Text style={styles.itemTitle}>Atlas Shrugged</Text>
            <Text style={styles.itemDescription}>Updated 2 days ago</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <Feather name="book" size={24} color="black" />
          <View style={styles.itemText}>
            <Text style={styles.itemTitle}>Mystery</Text>
            <Text style={styles.itemDescription}>Updated 1 day ago</Text>
          </View>
        </View>
      </View>
      <View style={styles.updateContainer}>
        <Text style={styles.title}>Updates</Text>
        <View style={styles.itemContainer}>
          <Feather name="alert-circle" size={24} color="black" />
          <View style={styles.itemText}>
            <Text style={styles.itemTitle}>One Indian Girl</Text>
            <Text style={styles.itemDescription}>Updated 4 days ago</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <Feather name="alert-circle" size={24} color="black" />
          <View style={styles.itemText}>
            <Text style={styles.itemTitle}>Room 403</Text>
            <Text style={styles.itemDescription}>Updated 5 days ago</Text>
          </View>
        </View>
      </View>
      <Text style={styles.continueReading}>Continue Reading...</Text>
      <View style={styles.readingProgress}>
        <View style={styles.readingItem}>
          <Feather name="book" size={24} color="black" />
          <Text style={styles.readingText}>White Tiger - 75%</Text>
        </View>
        <View style={styles.readingItem}>
          <Feather name="book" size={24} color="black" />
          <Text style={styles.readingText}>The Fountain Head- 50%</Text>
        </View>
        <View style={styles.readingItem}>
          <Feather name="book" size={24} color="black" />
          <Text style={styles.readingText}>A Suitable Boy - 30%</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFB6C1', // Lightest blue background color
    padding: 20,
  },
  bookContainer: {
    marginBottom: 20,
  },
  updateContainer: {
    marginBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  itemText: {
    marginLeft: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemDescription: {
    fontSize: 14,
    color: '#888',
  },
  continueReading: {
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 20,
  },
  readingProgress: {
    marginTop: 10,
  },
  readingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  readingText: {
    fontSize: 14,
    color: '#000',
    marginLeft: 10,
  },
});

export default UpdatesScreen;
