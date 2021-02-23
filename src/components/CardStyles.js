import { StyleSheet, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
export default styles = StyleSheet.create({
    conatainer: {
        width: windowWidth * .45,
        height: 350,
        margin: 10,
        shadowColor: 'black',
        shadowRadius: 5,
        shadowOpacity: .5
    },
    image: {
        height: undefined,
        width: "100%",
        aspectRatio: 2 / 3
    },
    name: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        paddingTop: 5
    },
    date: {
        textAlign: 'center',
        color: 'white',
        fontSize: 15
    }
})