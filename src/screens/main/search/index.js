import React, {useState, useEffect} from 'react';
import {TextInput, FlatList, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import SearchCard from '../../../components/searchcard';
import Styles from './Styles';
import {getSearchMovies} from '../../../utils/fetchData/getMovies';
import {getSearchMoviesUrl} from '../../../utils/fetchData/getUrl';

export default Search = ({navigation}) => {
  const [result, setResult] = useState([]);
  const [searchPressed, setSearchPressed] = useState(false);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    getSearchResults(searchInput);
  }, [searchInput]);

  const getSearchResults = async (query) => {
    let url = await getSearchMoviesUrl(query);
    let movieList = await getSearchMovies(url);
    setResult(movieList);
  };

  const handleInputChange = (input) => {
    setSearchPressed(false);
    setSearchInput(input);
  };

  const searchButtonPressed = (input, id) => {
    if (!searchPressed) {
      setSearchPressed(true);
      setSearchInput(input);
    } else {
      navigation.navigate('MovieProfile', {movieId: id});
    }
  };

  const renderSearchResults = (movie) => {
    return (
      <TouchableOpacity
        onPress={() =>
          searchButtonPressed(movie.item.original_title, movie.item.id)
        }>
        <SearchCard movie={movie.item} searchPressed={searchPressed} />
      </TouchableOpacity>
    );
  };

  return (
    <LinearGradient style={Styles.gradient} colors={['#cc2b5e', '#753a88']}>
      <TextInput
        style={Styles.searchInput}
        onChangeText={handleInputChange}
        value={searchInput}
        placeholder="Enter Movie name"
        placeholderTextColor="#ffff60"
      />
      <FlatList
        data={result}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderSearchResults}
      />
    </LinearGradient>
  );
};
