import { StyleSheet } from 'react-native';
export default Styles = StyleSheet.create({
    signUpView:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    formContainer:{
        borderWidth:1,
        borderRadius:4,
        borderColor:'violet',
        width:"70%",
        padding:5
    },
    heading:{
        fontSize:30,
        fontWeight:'bold',
        alignSelf: 'center',
        color: 'white',
        paddingVertical:10
    },
    signUpButton:{
        backgroundColor:'orange',
        margin:4,
        padding:10
    },
    input:{
        borderColor:'#ffdedb',
        borderRadius:2,
        borderWidth:1,
        height:40,
        marginVertical:5
    },
    label: {
        fontSize: 20,
        color: 'white',
        paddingTop:5
    },
    inputContainer: {
        borderTopColor: 'white',
        borderTopWidth: 1
    }
})