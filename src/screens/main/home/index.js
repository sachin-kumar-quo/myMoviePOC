import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Styles from './Styles';
import CategoryCard from '../../../components/categorycard';

export default Home = ({navigation}) => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [upComingMovies, setUpComingMovies] = useState([]);

  useEffect(() => {
    getTopRatedMovies();
  }, []);
  useEffect(() => {
    getPopularMovies();
  }, []);
  useEffect(() => {
    getUpComingMovies();
  }, []);

  const getTopRatedMovies = async () => {
    await fetch(
      'https://api.themoviedb.org/3/movie/top_rated?api_key=8ca2abb7154c8c81ef7cb403c11eec32&language=en-US&page=1',
    )
      .then((response) => response.json())
      .then((data) => {
        setTopRatedMovies(data.results);
      })
      .catch((err) => alert(err));
  };
  const getPopularMovies = async () => {
    await fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=8ca2abb7154c8c81ef7cb403c11eec32&language=en-US&page=1',
    )
      .then((response) => response.json())
      .then((data) => {
        setPopularMovies(data.results);
      })
      .catch((err) => alert(err));
  };
  const getUpComingMovies = async () => {
    await fetch(
      'https://api.themoviedb.org/3/movie/upcoming?api_key=8ca2abb7154c8c81ef7cb403c11eec32&language=en-US&page=1',
    )
      .then((response) => response.json())
      .then((data) => {
        setUpComingMovies(data.results);
      })
      .catch((err) => alert(err));
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
      </ScrollView>
    </LinearGradient>
  );
};
