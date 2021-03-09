import * as actions from './actionTypes';

const initialState = {
  isSignedIn: false,
  topRatedMovies: [],
  popularMovies: [],
  upComingMovies: [],
  nowPlayingMovies: [],
  loadedMovie: {},
  loggedInUser: {},
};

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SIGNIN:
      return {...state, isSignedIn: true, loggedInUser: action.payload};
    case actions.SIGNOUT:
      return {...state, isSignedIn: false, loggedInUser: null};
    case actions.SIGNUP:
      return {...state, isSignedIn: true, loggedInUser: action.payload};
    case actions.GET_TR_MOVIES:
      return {
        ...state,
        topRatedMovies: [...state.topRatedMovies, ...action.payload],
      };
    case actions.GET_P_MOVIES:
      return {
        ...state,
        popularMovies: [...state.popularMovies, ...action.payload],
      };
    case actions.GET_UC_MOVIES:
      return {
        ...state,
        upComingMovies: [...state.upComingMovies, ...action.payload],
      };
    case actions.GET_NP_MOVIES:
      return {
        ...state,
        nowPlayingMovies: [...state.nowPlayingMovies, ...action.payload],
      };
    case actions.GET_MOVIE:
      return {...state, loadedMovie: action.payload};
    case actions.RESET:
      return {
        ...state,
        isSignedIn: false,
        topRatedMovies: [],
        popularMovies: [],
        upComingMovies: [],
        nowPlayingMovies: [],
        loadedMovie: null,
        loggedInUser: null,
      };
    default:
      return state;
  }
};
