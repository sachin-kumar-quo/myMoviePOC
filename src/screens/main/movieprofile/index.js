import React, {useState, useEffect} from 'react';
import {Text, View, ScrollView, Image, FlatList} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Styles from './Styles';
import {getMovie} from '../../../utils/fetchData/getMovies';
import {getImgUrl, getMovieUrl} from '../../../utils/fetchData/getUrl';
import {useSelector, useDispatch} from 'react-redux';
import {getMovieProfile} from '../../../store/actions';

export default MovieProfile = ({route, navigation}) => {
  const movie = useSelector((state) => state.loadedMovie);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovieProfile(route.params.movieId));
  }, []);

  return (
    <LinearGradient style={Styles.gradient} colors={['#cc2b5e', '#753a88']}>
      <ScrollView contentContainerStyle={Styles.scrollView}>
        <View style={Styles.titleView}>
          <Text style={Styles.title}>{movie.original_title}</Text>
        </View>
        <View style={Styles.body}>
          <Image
            style={Styles.image}
            source={{
              uri: getImgUrl(movie.poster_path),
            }}
          />
          <View style={Styles.infoSection}>
            <FlatList
              contentContainerStyle={{flexDirection: 'column'}}
              horizontal={true}
              data={movie.production_companies}
              renderItem={({item}) => (
                <Text style={Styles.companies}>{item.name}</Text>
              )}
              keyExtractor={(item) => item.id.toString()}
              ItemSeparatorComponent={() => <Text>||</Text>}
            />
            <FlatList
              contentContainerStyle={{flexDirection: 'column'}}
              horizontal={true}
              data={movie.production_countries}
              renderItem={({item}) => (
                <Text style={Styles.countries}>{item.name}</Text>
              )}
              keyExtractor={(item) => item.name}
              ItemSeparatorComponent={() => <Text>||</Text>}
            />
            <FlatList
              contentContainerStyle={{flexDirection: 'column'}}
              horizontal={true}
              data={movie.spoken_languages}
              renderItem={({item}) => (
                <Text style={Styles.language}>{item.name}</Text>
              )}
              keyExtractor={(item) => item.name}
              ItemSeparatorComponent={() => <Text>||</Text>}
            />
            <Text style={Styles.date}>{movie.release_date}</Text>
            <FlatList
              horizontal={true}
              data={movie.genres}
              renderItem={({item}) => (
                <Text style={Styles.genres}>{item.name}</Text>
              )}
              keyExtractor={(item) => item.id.toString()}
              ItemSeparatorComponent={() => <Text>||</Text>}
            />
            <Text style={Styles.votes}>{movie.vote_count}</Text>
          </View>
        </View>
        <View>
          <Text style={Styles.overview}>{movie.overview}</Text>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};
