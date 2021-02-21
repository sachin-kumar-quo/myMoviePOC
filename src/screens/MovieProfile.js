import React,{useState, useEffect} from 'react';
import {Text, View, ScrollView, StyleSheet, Image, FlatList} from 'react-native';

export default MovieProfile = ({ route, navigation }) => {
    const [movie, setMovie] = useState("");

    useEffect(() => {
        getMovie();
    },[])


    const getMovie = async()=>{
        await fetch(`https://api.themoviedb.org/3/movie/${route.params.movieId}?api_key=8ca2abb7154c8c81ef7cb403c11eec32&language=en-US`)
            .then(response=>response.json())
            .then(data=>{
                setMovie(data);
            })
            .catch(err=>alert(err))
    }

    return(
        <ScrollView contentContainerStyle={{marginHorizontal:10}}>
            <View style={styles.titleView}>
                <Text style={styles.title}>{movie.original_title}</Text>
            </View>
            <View style={styles.body}>
                <Image
                    style={{height:350,flex:1}}
                    source={{
                        uri:`https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                    }} />
                <View style={{flex:1,margin:5}}>
                    <FlatList
                        contentContainerStyle={{flexDirection:'column'}}
                        horizontal={true}
                        data={movie.production_companies}
                        renderItem={({ item }) =>
                            <Text style={{fontWeight:'bold', fontSize:15}}>{item.name}</Text>}
                        keyExtractor={(item) => item.id.toString()}
                        ItemSeparatorComponent={() => <Text>||</Text>} />
                    <FlatList
                        contentContainerStyle={{flexDirection:'column'}}
                        horizontal={true}
                        data={movie.production_countries}
                        renderItem={({ item }) =>
                            <Text style={{fontSize:15}}>{item.name}</Text>}
                        keyExtractor={(item) => item.name}
                        ItemSeparatorComponent={() => <Text>||</Text>} />
                    <FlatList
                        contentContainerStyle={{flexDirection:'column'}}
                        horizontal={true}
                        data={movie.spoken_languages}
                        renderItem={({ item }) =>
                            <Text style={{flex: 1, flexShrink:1,fontSize:20}}>{item.name}</Text>}
                        keyExtractor={(item) => item.name}
                        ItemSeparatorComponent={() => <Text>||</Text>} />
                    <Text style={{fontSize:20}}>{movie.release_date}</Text>
                    <FlatList
                        horizontal={true}
                        data={movie.genres}
                        renderItem={({ item }) =>
                            <Text style={{fontSize:15}}>{item.name}</Text>}
                        keyExtractor={(item) => item.id.toString()}
                        ItemSeparatorComponent={() => <Text>||</Text>} />
                    <Text style={{fontSize:20, fontWeight:'bold'}}>{movie.vote_count}</Text>
                </View>
            </View>
            <View>
                <Text style={{fontSize:30}}>{movie.overview}</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    overview: {
        
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    titleView: {
        marginTop: 30,
        marginBottom:15
    },
    body: {
        flexDirection: 'row'
    }
})
