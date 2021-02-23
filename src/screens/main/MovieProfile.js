import React,{useState, useEffect} from 'react';
import {Text, View, ScrollView, StyleSheet, Image, FlatList} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './MovieProfileStyles';

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
    return (
        <LinearGradient
            style={styles.gradient}
            colors={['#cc2b5e','#753a88']}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <View style={styles.titleView}>
                    <Text style={styles.title}>{movie.original_title}</Text>
                </View>
                <View style={styles.body}>
                    <Image
                        style={styles.image}
                        source={{
                            uri:`https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                        }} />
                    <View style={styles.infoSection}>
                        <FlatList
                            contentContainerStyle={{flexDirection:'column'}}
                            horizontal={true}
                            data={movie.production_companies}
                            renderItem={({ item }) =>
                                <Text style={styles.companies}>{item.name}</Text>}
                            keyExtractor={(item) => item.id.toString()}
                            ItemSeparatorComponent={() => <Text>||</Text>} />
                        <FlatList
                            contentContainerStyle={{flexDirection:'column'}}
                            horizontal={true}
                            data={movie.production_countries}
                            renderItem={({ item }) =>
                                <Text style={styles.countries}>{item.name}</Text>}
                            keyExtractor={(item) => item.name}
                            ItemSeparatorComponent={() => <Text>||</Text>} />
                        <FlatList
                            contentContainerStyle={{flexDirection:'column'}}
                            horizontal={true}
                            data={movie.spoken_languages}
                            renderItem={({ item }) =>
                                <Text style={styles.language}>{item.name}</Text>}
                            keyExtractor={(item) => item.name}
                            ItemSeparatorComponent={() => <Text>||</Text>} />
                        <Text style={styles.date}>{movie.release_date}</Text>
                        <FlatList
                            horizontal={true}
                            data={movie.genres}
                            renderItem={({ item }) =>
                                <Text style={styles.genres}>{item.name}</Text>}
                            keyExtractor={(item) => item.id.toString()}
                            ItemSeparatorComponent={() => <Text>||</Text>} />
                        <Text style={styles.votes}>{movie.vote_count}</Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.overview}>{movie.overview}</Text>
                </View>
            </ScrollView>
        </LinearGradient>    
    )
}

