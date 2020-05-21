import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
//import styles for component
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

class Home extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.homeDiv}>
        <Image
          source={{
            uri:
              'https://res.cloudinary.com/aa1997/image/upload/v1536011005/Pokemon_HomePage_Icon.png',
          }}
          style={styles.homePageImage}
        />
        <Text style={styles.header}>Welcome to Pokemon API App</Text>
        <TouchableOpacity style={styles.action}>
          <Text
            style={styles.n}
            onPress={() => navigation.navigate('PokeList')}
          >
            Go to Poke List
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Home;
