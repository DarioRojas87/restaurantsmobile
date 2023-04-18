import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SearchScreen from './src/screens/SearchScreen';
import ResultScreen from './src/screens/ResultScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitle: 'RestoFinder',
          headerStyle: {
            backgroundColor: 'rgb(252, 220, 223)',
            borderBottomWidth: 1,
            borderBottomColor: 'black',
          },
          headerTintColor: 'black',
        }}
      >
        <Stack.Screen name='Search' component={SearchScreen} />
        <Stack.Screen name='ResultsShow' component={ResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
