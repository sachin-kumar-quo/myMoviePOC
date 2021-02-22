import React,{useState} from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useEffect } from 'react/cjs/react.development';

import Card from '../components/Card'

export default List = ({route,navigation}) => {
    const [movies, setMovies] = useState([]);
    const [offset, setOffset] = useState(1);

    useEffect(() => {
        getMovies();
    },[])

    const getMovies = async () => {
        await fetch(`https://api.themoviedb.org/3/movie/${route.params.section}?api_key=8ca2abb7154c8c81ef7cb403c11eec32&language=en-US&page=${offset}`)
            .then(response=>response.json())
            .then(data=>{
                setMovies(data.results);
                setOffset(offset + 1);
            })
            .catch(err=>alert(err))
    }
    const loadMoreMovies = async () => {
        await fetch(`https://api.themoviedb.org/3/movie/${route.params.section}?api_key=8ca2abb7154c8c81ef7cb403c11eec32&language=en-US&page=${offset}`)
            .then(response=>response.json())
            .then(data => {
                const res = data.results;
                setMovies([...movies,...res]);
                setOffset(offset + 1);
            })
            .catch(err=>alert(err))
    }
    const renderListItem = (movie) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('MovieProfile', { movieId: movie.item.id })}>
                <Card coverPhoto={movie.item.poster_path} releaseDate={movie.item.release_date} movieName={movie.item.original_title}/>
            </TouchableOpacity>
        )
    }

    return (
        <LinearGradient
            colors={['#cc2b5e','#753a88']}>
            <Text style={{fontSize:50,textAlign:'center',color:'white',fontWeight:'bold'}}>{route.params.name}</Text>
            <FlatList
                data={movies}
                numColumns={2}
                renderItem={renderListItem}
                onEndReached={loadMoreMovies}
                onEndReachedThreshold={.1}
                keyExtractor={item => item.id}
                extraData={movies}
                />
        </LinearGradient>
    )
}