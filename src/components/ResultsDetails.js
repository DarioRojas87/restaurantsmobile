import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ResultsDetails = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.title}>{result.name}</Text>
      <Text>
        {result.rating} Starts, {result.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginRight: 24 },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 8,
  },
  title: {
    fontWeight: 'bold',
  },
});
export default ResultsDetails;
