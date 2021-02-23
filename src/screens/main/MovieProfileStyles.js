import {StyleSheet} from 'react-native'
export default styles = StyleSheet.create({
    overview: {
        marginTop:20,
        fontSize: 20,
        color:'white'
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center',
        color:'white'
    },
    titleView: {
        marginTop: 30,
        marginBottom:15
    },
    body: {
        flexDirection: 'row',
        color:'white'
    },
    gradient: {
        flex:1
    },
    scrollView: {
        marginHorizontal:10
    },
    image: {
        height: undefined,
        width: "100%",
        aspectRatio: 2 / 3,
        flex: 1
    },
    infoSection: {
        flex: 1,
        margin: 5
    },
    companies: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white'
    },
    countries: {
        fontSize: 15,
        color: 'white'
    },
    language: {
        flex: 1,
        flexShrink: 1,
        fontSize: 20,
        color: 'white'
    },
    date: {
        fontSize: 20,
        color: 'white'
    },
    genres: {
        fontSize: 15,
        color: 'white'
    },
    votes: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'orange'
    }
})