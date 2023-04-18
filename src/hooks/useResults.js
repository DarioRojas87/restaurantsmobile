import React, { useState, useEffect, useMemo } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState(false);

  const searchApi = async (searchTerm) => {
    if (!searchTerm.length) return null;
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: '50',
          term: searchTerm,
          location: 'san jose',
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage(true);
    }
  };

  useEffect(() => {
    searchApi('pasta');
  }, []);

  return [searchApi, results, errorMessage];
};
