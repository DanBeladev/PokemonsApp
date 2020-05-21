import React from 'react';
//first import createStackNavigator from react-navigation
import { NavigationContainer } from '@react-navigation/native';
//then import StackNavigator for creatign nested routes
import { createStackNavigator } from '@react-navigation/stack';
//Import your screens
import PokeList from './components/PokeList';
import Pokemon from './components/Pokemon';
import Home from './components/Home';

const RootStack = createStackNavigator();

//Define your routes using createStackNavigator, which will be a object full of options.

function AppStack() {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName='Home'>
        <RootStack.Screen
          name='Home'
          component={Home}
          options={{headerShown: false}}

        />
        <RootStack.Screen name='PokeList' component={PokeList} />
        <RootStack.Screen name='Pokemon' component={Pokemon} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

//Export default the stateless component
const App = () => {
  return <AppStack />;
};

export default App;
