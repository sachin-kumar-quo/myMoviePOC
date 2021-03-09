import * as actions from './actionTypes';
import {
  getMoviesUrl,
  getMovieUrl,
  getSearchMoviesUrl,
} from '../utils/fetchData/getUrl';
import {getMovies, getMovie} from '../utils/fetchData/getMovies';
import ValidateInput from './../utils/validation/ValidateInput';
import auth from '@react-native-firebase/auth';

export const SIGNIN = (user) => ({
  type: actions.SIGNIN,
  payload: user,
});

export const SIGNOUT = () => ({
  type: actions.SIGNOUT,
});

export const SIGNUP = (user) => ({
  type: actions.SIGNUP,
  payload: user,
});

export const RESET = () => ({
  type: actions.RESET,
});

export const GET_NP_MOVIES = (json) => ({
  type: actions.GET_NP_MOVIES,
  payload: json,
});

export const GET_P_MOVIES = (json) => ({
  type: actions.GET_P_MOVIES,
  payload: json,
});

export const GET_UC_MOVIES = (json) => ({
  type: actions.GET_UC_MOVIES,
  payload: json,
});

export const GET_TR_MOVIES = (json) => ({
  type: actions.GET_TR_MOVIES,
  payload: json,
});

export const LOAD_NP_MOVIES = (json) => ({
  type: actions.LOAD_NP_MOVIES,
  payload: json,
});

export const LOAD_P_MOVIES = (json) => ({
  type: actions.LOAD_P_MOVIES,
  payload: json,
});

export const LOAD_UC_MOVIES = (json) => ({
  type: actions.LOAD_UC_MOVIES,
  payload: json,
});

export const LOAD_TR_MOVIES = (json) => ({
  type: actions.LOAD_TR_MOVIES,
  payload: json,
});

export const GET_MOVIE = (json) => ({
  type: actions.GET_MOVIE,
  payload: json,
});

export const getTopRatedMovies = () => {
  return async (dispatch, getState) => {
    let offset = getState().topRatedMovies.length / 20;
    try {
      let url = await getMoviesUrl('top_rated', offset + 1);
      let movies = await getMovies(url);
      dispatch(GET_TR_MOVIES(movies));
    } catch (error) {
      console.log(error);
    }
  };
};

export const getPopularMovies = () => {
  return async (dispatch, getState) => {
    let offset = getState().popularMovies.length / 20;
    try {
      let url = await getMoviesUrl('popular', offset + 1);
      let movies = await getMovies(url);
      dispatch(GET_P_MOVIES(movies));
    } catch (error) {
      console.log(error);
    }
  };
};

export const getUpComingMovies = () => {
  return async (dispatch, getState) => {
    let offset = getState().upComingMovies.length / 20;
    try {
      let url = await getMoviesUrl('upcoming', offset + 1);
      let movies = await getMovies(url);
      dispatch(GET_UC_MOVIES(movies));
    } catch (error) {
      console.log(error);
    }
  };
};

export const getNowPlayingMovies = () => {
  return async (dispatch, getState) => {
    let offset = getState().nowPlayingMovies.length / 20;
    try {
      let url = await getMoviesUrl('now_playing', offset + 1);
      let movies = await getMovies(url);
      dispatch(GET_NP_MOVIES(movies));
    } catch (error) {
      console.log(error);
    }
  };
};

export const getMovieProfile = (movieId) => {
  return async (dispatch, getState) => {
    if (getState().loadedMovie.id != movieId) {
      try {
        let url = await getMovieUrl(movieId);
        let movies = await getMovie(url);
        dispatch(GET_MOVIE(movies));
      } catch (error) {
        console.log(error);
      }
    }
  };
};

export const signIn = (email, password) => {
  return async (dispatch) => {
    if (ValidateInput(email, password)) {
      auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          alert(`welcome ${email}`);
          dispatch(SIGNIN(email));
        })
        .catch((error) => {
          if (error.code === 'auth/invalid-email') {
            alert('That email address is invalid!');
          }
        });
    }
  };
};

export const signOut = () => {
  return async (dispatch, getState) => {
    auth()
      .signOut()
      .then(() => {
        console.log(getState());
        dispatch(RESET());
        console.log(getState());
      });
  };
};

export const signUp = (email, password) => {
  return async (dispatch) => {
    if (ValidateInput(email, password)) {
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          alert(`welcome ${email}`);
          dispatch(SIGNUP(email));
        })
        .catch((error) => {
          if (error.code === 'auth/email-already-in-use') {
            alert('That email address is already in use!');
          }
          if (error.code === 'auth/invalid-email') {
            alert('That email address is invalid!');
          }
        });
    }
  };
};
