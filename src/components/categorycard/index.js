import React from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Styles from './Styles';
import Card from '../card';

export default CategoryCard = ({
  navigation,
  headingText,
  headingIcon,
  section,
  moviesList,
}) => {
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
    <View style={Styles.section}>
      <View>
        <Text style={Styles.heading}>
          {headingText} <Icon name={headingIcon} size={40} />
        </Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('MovieList', {
              name: headingText,
              section: section,
            })
          }>
          <Text style={Styles.seeMore}>See More...</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal={true}
        data={moviesList}
        renderItem={renderListItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};
