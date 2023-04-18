
# RestoFinder

This is a mobile application that is about a restaurant finder in your area. I developed it as part of my deepening in the development of mobile applications with React Native.
This App uses the Yelp API to search for restaurants by area.


## Demo

To run this App you will need an Android or iOS emulator or install Metro on your physical device


https://user-images.githubusercontent.com/68232926/232641122-ab1b73be-a030-4041-9807-9eedeae58059.mov




https://user-images.githubusercontent.com/68232926/232641250-731ffb91-1dc7-4726-90b6-27523cba1cba.mov



https://user-images.githubusercontent.com/68232926/232641269-c4e86556-8e34-44a8-8432-b842571a97bc.mov


## Run Locally

Clone the project

```bash
  git clone https://github.com/DarioRojas87/restaurantsmobile.git
```

Go to the project directory

```bash
  cd my-project
```


Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```


## API Reference

#### Get all restaurants

```http
  GET api.yelp.com/v3/businesses/search
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get one restaurant

```http
  GET api.yelp.com/v3/businesses/{business_id_or_alias}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Request example:

const options = {method: 'GET', headers: { Authorization: 'Bearer YourApikEY'}};

fetch('https://api.yelp.com/v3/businesses/search?sort_by=best_match&limit=20', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));


## Documentation

[Yelp API](https://docs.developer.yelp.com/docs/fusion-intro) ||
[React Navigation](https://reactnavigation.org/docs/getting-started)



