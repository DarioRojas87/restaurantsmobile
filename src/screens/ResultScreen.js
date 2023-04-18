import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ActivityIndicator,
} from 'react-native';
import yelp from '../api/yelp';

const ResultScreen = ({ route }) => {
  const [result, setResult] = useState({});
  const id = route.params.id;

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };
  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) return null;

  return (
    <View style={styles.container}>
      {!result.photos || !result.location ? (
        <ActivityIndicator
          style={styles.loader}
          color={'rgb(244,152,194)'}
          size={300}
        />
      ) : (
        <>
          <Text style={styles.title}>{result.name}</Text>
          <Text style={styles.subtitle}>
            {result.location.address1}, {result.location.city}
          </Text>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={result.photos}
            keyExtractor={(photo) => photo}
            renderItem={({ item }) => (
              <Image style={styles.image} source={{ uri: item }} />
            )}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: 'rgb(252, 220, 223)',
    paddingTop: 16,
  },
  title: { fontWeight: 'bold', fontSize: 20, textAlign: 'center' },
  subtitle: { fontWeight: 'bold', marginBottom: 16 },
  image: {
    width: 300,
    height: 250,
    marginVertical: 16,
    borderRadius: 10,
  },
  loader: { alignSelf: 'center', justifySelf: 'center' },
});
export default ResultScreen;
