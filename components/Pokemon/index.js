import React, {  Component } from 'react'; 
//import UI from react-native
import { View, Text, Image } from 'react-native';
//import styles for component.
import styles from './styles';



//Define your class component
export default class Pokemon extends Component {
    
    render() {
        const {name} = this.props.route.params
        console.log(name);
        return (
            <View>
                <Image source={{uri: 'https://res.cloudinary.com/aa1997/image/upload/v1535930682/pokeball-image.jpg'}}
                        style={styles.pokemonImage} />
                <Text style={styles.nameOfPokemon}>{name}</Text>
            </View>
        );
    }
}