import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet,FlatList,TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import SearchCard from '../components/SearchCard'

export default Search = () => {
    const [result, setResult] = useState([]);
    const [selectedResult, setSelectedResult] = useState("");

    const getSearchResults = async (query) => {
        await fetch(`https://api.themoviedb.org/3/search/movie?api_key=8ca2abb7154c8c81ef7cb403c11eec32&language=en-US&query=${query}&page=1&include_adult=false`)
            .then(response=>response.json())
            .then(data=>{
                setResult(data.results);
            })
            .catch(err=>alert(err))
    }

    const handleChange = (input) => {
        setSelectedResult("");
        getSearchResults(input);
    }

    const renderSearchResults = (movie) => {
        return (
            <TouchableOpacity onPress={()=>setSelectedResult(movie.item)}>
                <SearchCard movie={movie.item} />
            </TouchableOpacity>
        )
    }

    return(
        <LinearGradient
            style={{flex:1}}
            colors={['#cc2b5e','#753a88']}>
            <TextInput style={styles.searchInput} onChangeText={handleChange}/>
            <Text style={{ textAlign: 'center', marginVertical: 10, fontSize: 20,color:'white' }}>Search</Text>
            <FlatList
                data={result}
                keyExtractor={item => item.id.toString()}
                renderItem={renderSearchResults}/>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    searchInput: {
        borderColor: 'white',
        borderRadius: 1,
        borderWidth: 1,
        marginTop: 20,
        marginHorizontal:20,
        height:40
    }
})
