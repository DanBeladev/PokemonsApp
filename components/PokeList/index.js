//import PoreCompoent for preventing unnecesary updates.
import React, { Component } from 'react';
import { TextInput, View } from 'react-native';
//import comopnents
import PokeCard from '../PokeCard';
//import your components from react-native
import { FlatList, ActivityIndicator } from 'react-native';
//import styles for your component
import styles from './styles';

export default class PokeList extends Component {
  //Define your state for your component.
  state = {
    //Assing a array to your pokeList state
    pokeList: [],

    sortedData: [],
    //Have a loading state where when data retrieve returns data.
    loading: true,

    search: '',
  };

  //Define your componentDidMount lifecycle hook that will retrieve data.
  //Also have the async keyword to indicate that it is asynchronous.
  //   async componentDidMount() {
  //     //Have a try and catch block for catching errors.
  //     try {
  //       //Assign the promise unresolved first then get the data using the json method.
  //       const pokemonApiCall = await fetch('https://pokeapi.co/api/v2/pokemon/');
  //       const pokemon = await pokemonApiCall.json();
  //       pokemon.results.sort((a, b) => {
  //         if (a.name < b.name) {
  //           return -1;
  //         }
  //         if (a.name > b.name) {
  //           return 1;
  //         }
  //         return 0;
  //       });
  //       this.setState({ pokeList: pokemon.results, sortedData:pokemon.results, loading: false });
  //     } catch (err) {
  //       console.log('Error fetching data-----------', err);
  //     }
  //   }

  //Define your componentDidMount lifecycle hook that will retrieve data.
  //Also have the async keyword to indicate that it is asynchronous.
  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon/')
      .then((res) => {
        console.log('1 done');
        return res.json();
      })
      .then((json) => {
        const data = [...json.results];
        data.sort((a, b) => {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        });
        this.setState({ pokeList: data, sortedData: data, loading: false });
      })
      .catch((err) => {console.log('Error with fetch data', err)
    throw err});
  }

  onSearchChanged = (text) => {
    this.setState({ search: text });
    const arrayAfterFilter = [...this.state.pokeList].filter((item) => {
      const itemInLowerCase = item.name.toLowerCase();
      if (itemInLowerCase.includes(text.toLowerCase())) return item;
    });

    this.setState({ sortedData: arrayAfterFilter });
  };

  render() {
    //Destruct pokeList and Loading from state.
    const { loading } = this.state;
    //Destruct navigation from props
    const { navigation } = this.props;
    //If laoding to false, return a FlatList which will have data, rednerItem, and keyExtractor props used.
    //Data contains the data being  mapped over.
    //RenderItem a callback return UI for each item.
    //keyExtractor used for giving a unique identifier for each item.
    if (!loading) {
      return (
        <View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.searchInput}
              blurOnSubmit
              autoCapitalize='none'
              autoCorrect={false}
              placeholder='Search'
              onChangeText={(text) => this.onSearchChanged(text)}
              value={this.state.search}
              ref={(input) => (this.search = input)}
            />
          </View>
          <FlatList
            data={this.state.sortedData}
            renderItem={(data) => (
              <PokeCard {...data.item} navigation={navigation} />
            )}
            keyExtractor={(item) => item.name}
          />
        </View>
      );
    } else {
      return <ActivityIndicator />;
    }
  }
}
