import React, {useState, useEffect} from 'react';
import {Text, FlatList, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Styles from './Styles';
import Card from '../../../components/card';
import {getMovies} from '../../../utils/fetchData/getMovies';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {getMoviesUrl} from '../../../utils/fetchData/getUrl';

export default List = ({route, navigation}) => {
  const [movies, setMovies] = useState([]);
  const [offset, setOffset] = useState(1);

  useEffect(() => {
    getListMovies();
  }, []);

  const getListMovies = async () => {
    let url = await getMoviesUrl(route.params.section, offset);
    let movieList = await getMovies(url);
    setMovies([...movies, ...movieList]);
    setOffset(offset + 1);
  };

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
        onEndReached={getListMovies}
        onEndReachedThreshold={0.1}
        keyExtractor={(item) => item.id}
        extraData={movies}
      />
    </LinearGradient>
  );
};
