import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Modal, TextInput, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons'; // Import Feather icons

const HomeScreen = ({ navigation }) => {
  const [isAddBookModalVisible, setAddBookModalVisible] = useState(false);
  const [newBookName, setNewBookName] = useState('');
  const [genres, setGenres] = useState(['Fiction', 'Mystery', 'Romance', 'Thriller', 'Fantasy']);

  const handleAddBook = () => {
    if (newBookName.trim() === '') {
      Alert.alert('Error', 'Please enter a valid book name.');
      return;
    }

    // Logic to add the new book to the database or perform any other action
    // After adding the book, you can close the modal
    setAddBookModalVisible(false);
    // You can add further logic to handle the book addition process
    console.log(`Adding book: ${newBookName}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome BookWorms</Text>
        <Text style={styles.subtitle}>Let's Explore</Text>
        <Text style={styles.description}>
          BookWorm's Haven is your destination for discovering new books, connecting with fellow bibliophiles, and sharing your love for literature. Join our community today!
        </Text>
      </View>
      <View style={styles.genreContainer}>
        <Text style={styles.genreHeading}>Genres</Text>
        <View style={styles.genreList}>
          {genres.map((genre, index) => (
            <TouchableOpacity key={index} style={styles.genreBox}>
              <Text style={styles.genreText}>{genre}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Search')}>
          <Feather name="search" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Updates')}>
          <Feather name="bell" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Profile')}>
          <Feather name="user" size={24} color="white" />
        </TouchableOpacity>
        {/* Plus Icon for adding books */}
        <TouchableOpacity style={styles.button} onPress={() => setAddBookModalVisible(true)}>
          <Feather name="plus" size={24} color="white" />
        </TouchableOpacity>
      </View>
      {/* Modal for adding books */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isAddBookModalVisible}
        onRequestClose={() => setAddBookModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput
              style={styles.input}
              placeholder="Enter book name"
              value={newBookName}
              onChangeText={(text) => setNewBookName(text)}
            />
            <TouchableOpacity style={styles.addButton} onPress={handleAddBook}>
              <Text style={styles.addButtonText}>Add Book</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFB6C1',
    padding: 20,
    justifyContent: 'space-between',
  },
  content: {
    alignItems: 'center',
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    fontFamily: 'Roboto',
  },
  subtitle: {
    fontSize: 18,
    color: '#888888',
    marginBottom: 20,
    fontFamily: 'Roboto',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'Roboto',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF69B4',
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  genreContainer: {
    marginBottom: 20,
  },
  genreHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  genreList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  genreBox: {
    backgroundColor: '#fff',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginRight: 10,
    marginBottom: 10,
  },
  genreText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF69B4',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  addButton: {
    backgroundColor: '#FF69B4',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
