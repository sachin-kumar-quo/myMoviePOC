import React, {useState, useEffect} from 'react';
import {Text, FlatList, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Styles from './Styles';
import Card from '../../../components/card';
import {getMovies} from '../../../utils/fetchData/getMovies';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {getMoviesUrl} from '../../../utils/fetchData/getUrl';
import {useSelector, useDispatch} from 'react-redux';
import * as loadMovies from '../../../store/actions';

export default List = ({route, navigation}) => {
  const movies = useSelector((state) => {
    switch (route.params.section) {
      case 'popular':
        return state.popularMovies;
      case 'top_rated':
        return state.topRatedMovies;
      case 'upcoming':
        return state.upComingMovies;
      case 'now_playing':
        return state.nowPlayingMovies;
    }
  });
  const dispatch = useDispatch();

  const renderListItem = (movie) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('MovieProfile', {movieId: movie.item.id})
        }>
        <Card
          coverPhoto={movie.item.poster_path}
          releaseDate={movie.item.release_date}
          movieName={movie.item.original_title}
        />
      </TouchableOpacity>
    );
  };

  return (
    <LinearGradient style={Styles.gradient} colors={['#cc2b5e', '#753a88']}>
      <Text style={Styles.heading}>
        {route.params.name}
        {'  '}
        <Icon name={route.params.headingIcon} size={40} />
      </Text>
      <FlatList
        data={movies}
        numColumns={2}
        renderItem={renderListItem}
        onEndReached={() => {
          switch (route.params.section) {
            case 'popular':
              return dispatch(loadMovies.getPopularMovies());
            case 'top_rated':
              return dispatch(loadMovies.getTopRatedMovies());
            case 'upcoming':
              return dispatch(loadMovies.getUpComingMovies());
            case 'now_playing':
              return dispatch(loadMovies.getNowPlayingMovies());
          }
        }}
        onEndReachedThreshold={0.1}
        keyExtractor={(item) => item.id}
        extraData={movies}
      />
    </LinearGradient>
  );
};
