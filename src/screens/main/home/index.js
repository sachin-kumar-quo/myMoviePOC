import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Styles from './Styles';
import CategoryCard from '../../../components/categorycard';
import {getMovies} from '../../../utils/fetchData/getMovies';
import {getMoviesUrl} from '../../../utils/fetchData/getUrl';

export default Home = ({navigation}) => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [upComingMovies, setUpComingMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);

  useEffect(() => {
    getTopRatedMovies();
  }, []);

  useEffect(() => {
    getPopularMovies();
  }, []);

  useEffect(() => {
    getUpComingMovies();
  }, []);

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  const getTopRatedMovies = async () => {
    let url = await getMoviesUrl('top_rated', 1);
    let movies = await getMovies(url);
    setTopRatedMovies(movies);
  };

  const getPopularMovies = async () => {
    let url = await getMoviesUrl('popular', 1);
    let movies = await getMovies(url);
    setPopularMovies(movies);
  };

  const getUpComingMovies = async () => {
    let url = await getMoviesUrl('upcoming', 1);
    let movies = await getMovies(url);
    setUpComingMovies(movies);
  };

  const getNowPlayingMovies = async () => {
    let url = await getMoviesUrl('now_playing', 1);
    let movies = await getMovies(url);
    setNowPlayingMovies(movies);
  };

  return (
    <LinearGradient style={Styles.gradient} colors={['#cc2b5e', '#753a88']}>
      <ScrollView>
        <CategoryCard
          headingText="Top Rated"
          headingIcon="fire"
          section="top_rated"
          navigation={navigation}
          moviesList={topRatedMovies}
        />
        <CategoryCard
          headingText="Popular"
          headingIcon="star-of-david"
          section="popular"
          navigation={navigation}
          moviesList={popularMovies}
        />
        <CategoryCard
          headingText="UpComing"
          headingIcon="hourglass-start"
          section="upcoming"
          navigation={navigation}
          moviesList={upComingMovies}
        />
        <CategoryCard
          headingText="Now Playing"
          headingIcon="hourglass-start"
          section="now_playing"
          navigation={navigation}
          moviesList={nowPlayingMovies}
        />
      </ScrollView>
    </LinearGradient>
  );
};
