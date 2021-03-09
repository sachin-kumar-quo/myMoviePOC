import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Styles from './Styles';
import CategoryCard from '../../../components/categorycard';
import {useSelector, useDispatch} from 'react-redux';
import {
  getTopRatedMovies,
  getPopularMovies,
  getNowPlayingMovies,
  getUpComingMovies,
} from '../../../store/actions';

export default Home = ({navigation}) => {
  const topRatedMovies = useSelector((state) =>
    state.topRatedMovies.slice(0, 10),
  );
  const popularMovies = useSelector((state) =>
    state.popularMovies.slice(0, 10),
  );
  const upComingMovies = useSelector((state) =>
    state.upComingMovies.slice(0, 10),
  );
  const nowPlayingMovies = useSelector((state) =>
    state.nowPlayingMovies.slice(0, 10),
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopRatedMovies());
  }, []);

  useEffect(() => {
    dispatch(getPopularMovies());
  }, []);

  useEffect(() => {
    dispatch(getUpComingMovies());
  }, []);

  useEffect(() => {
    dispatch(getNowPlayingMovies());
  }, []);

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
