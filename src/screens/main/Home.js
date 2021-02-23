import React,{useState, useEffect} from 'react';
import { Text, ScrollView, StyleSheet, View, TouchableOpacity, FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Card from '../../components/Card';
import styles from './HomeStyles'

export default Home = ({navigation}) =>{
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);
    const [upComingMovies, setUpComingMovies] = useState([]);

    useEffect(()=>{
        getTopRatedMovies();
    },[])
    useEffect(() => {
        getPopularMovies();
    }, [])
    useEffect(() => {
        getUpComingMovies();
    },[])

    const getTopRatedMovies = async()=>{
        await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=8ca2abb7154c8c81ef7cb403c11eec32&language=en-US&page=1')
            .then(response=>response.json())
            .then(data=>{
                setTopRatedMovies(data.results);
            })
            .catch(err=>alert(err))
    }
    const getPopularMovies = async() => {
        await fetch('https://api.themoviedb.org/3/movie/popular?api_key=8ca2abb7154c8c81ef7cb403c11eec32&language=en-US&page=1')
            .then(response=>response.json())
            .then(data=>{
                setPopularMovies(data.results);
            })
            .catch(err=>alert(err))
    }
    const getUpComingMovies = async() => {
        await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=8ca2abb7154c8c81ef7cb403c11eec32&language=en-US&page=1')
            .then(response=>response.json())
            .then(data=>{
                setUpComingMovies(data.results);
            })
            .catch(err=>alert(err))
    }
    const renderListItem = (movie) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('MovieProfile', { movieId: movie.item.id})}>
                <Card coverPhoto={movie.item.poster_path} releaseDate={movie.item.release_date} movieName={movie.item.original_title}/>
            </TouchableOpacity>
        )
    }
    return (
        <LinearGradient
            style={styles.gradient}
            colors={['#cc2b5e','#753a88']}>
            <ScrollView >
                <View style={styles.section}>
                    <Text style={styles.heading}> Top Rated <Icon name="fire" size={40}/></Text>
                    <TouchableOpacity onPress={()=>navigation.navigate('MovieList',{name:'Top Rated',section:'top_rated'})}><Text style={styles.seeMore}>See More...</Text></TouchableOpacity>
                </View>
                <View>
                    <FlatList
                        horizontal={true}
                        data={topRatedMovies}
                        renderItem={renderListItem}
                        keyExtractor={item => item.id.toString()} />
                </View>
                <View style={styles.section}>
                    <View>
                        <Text style={styles.heading}> Popular <Icon name="star-of-david" size={40} /></Text>
                        <TouchableOpacity onPress={()=>navigation.navigate('MovieList',{name:'Popular',section:'popular'})}><Text style={styles.seeMore}>See More...</Text></TouchableOpacity>
                    </View>
                    <FlatList
                        horizontal={true}
                        data={popularMovies}
                        renderItem={renderListItem}
                        keyExtractor={item => item.id.toString()} />
                </View>
                <View style={styles.section}>
                    <View>
                        <Text style={styles.heading}> UpComing <Icon name="hourglass-start" size={30} /></Text>
                        <TouchableOpacity onPress={()=>navigation.navigate('MovieList',{name:'UpComing',section:'upcoming'})}><Text style={styles.seeMore}>See More...</Text></TouchableOpacity>
                    </View>
                    <FlatList
                        horizontal={true}
                        data={upComingMovies}
                        renderItem={renderListItem}
                        keyExtractor={item => item.id.toString()} />
                </View>
            </ScrollView>
        </LinearGradient>
    )
}
