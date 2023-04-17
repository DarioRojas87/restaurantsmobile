import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer OYX0I9IAeF4n80JFufA759fSwqZugbbeiSm4WUc3Lx_UFBqaB3KlVQY7RydIIIiZeAAdZXreVwePMyCI3BLpKI_5wOTtfic2U0cxn2CUOymJZgN9LSPpEjg1_QA3ZHYx',
  },
});
