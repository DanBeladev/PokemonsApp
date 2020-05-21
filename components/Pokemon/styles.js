//import StyleSheet from react-native to provide styling via a css abstraction
import { StyleSheet } from 'react-native';

//Define your styles 
const styles = StyleSheet.create({
    pokemonImage: {
        height: '60%',
        width: '100%'
    },
    nameOfPokemon: {
        fontSize: 25,
        textAlign:"center"
    }
})

//Export your styles
export default styles;