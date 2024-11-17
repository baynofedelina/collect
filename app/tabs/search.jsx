import { View, TextInput, StyleSheet, Image } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons'; 

const Search = () => {
  return (
    <View style={styles.container}>
    <View className="flex-col justify-center, items-center">

</View>

      <Icon name="search" size={20} color="#888" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Search..."
        placeholderTextColor="#888"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 5,
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    padding: 10,
    color: '#333',
  },
  icon: {
    marginRight: 10,
  },
});

export default Search;
