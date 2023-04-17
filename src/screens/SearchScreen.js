import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };
  return (
    <>
      <SearchBar
        searchTerm={searchTerm}
        onSearchTermChange={setSearchTerm}
        onSubmit={() => searchApi(searchTerm)}
      />
      {errorMessage && (
        <Text>Something went wrong, try again in a minute &#x1f635;</Text>
      )}
      <ScrollView>
        <ResultsList
          title={'Cost Effective'}
          results={filterResultsByPrice('$')}
        />
        <ResultsList
          title={'Bit Pricier'}
          results={filterResultsByPrice('$$')}
        />
        <ResultsList
          title={'Big Spender'}
          results={filterResultsByPrice('$$$')}
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});
export default SearchScreen;
