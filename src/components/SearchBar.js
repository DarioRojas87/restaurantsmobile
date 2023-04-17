import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ searchTerm, onSearchTermChange, onSubmit }) => {
  return (
    <View style={styles.container}>
      <Feather style={styles.icon} name='search' />
      <TextInput
        onEndEditing={onSubmit}
        autoCapitalize='none'
        autoCorrect={false}
        style={styles.input}
        placeholder='Search for a restaurant!'
        value={searchTerm}
        onChangeText={onSearchTermChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 10,
    marginTop: 16,
    marginHorizontal: 16,
    borderColor: '#000000',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  input: {
    flex: 1,
    alignSelf: 'stretch',
    fontSize: 18,
  },
  icon: {
    fontSize: 35,
    color: '#000000',
    marginHorizontal: 8,
  },
});
export default SearchBar;
