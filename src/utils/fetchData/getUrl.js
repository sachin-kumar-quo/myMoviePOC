export const getImgUrl = (path) => {
  return `https://image.tmdb.org/t/p/w500/${path}`;
};
export const getMoviesUrl = (category, page) => {
  return `https://api.themoviedb.org/3/movie/${category}?api_key=8ca2abb7154c8c81ef7cb403c11eec32&language=en-US&page=${page}`;
};
export const getSearchMoviesUrl = (query) => {
  return `https://api.themoviedb.org/3/search/movie?api_key=8ca2abb7154c8c81ef7cb403c11eec32&language=en-US&query=${query}&page=1`;
};
export const getMovieUrl = (movieId) => {
  return `https://api.themoviedb.org/3/movie/${movieId}?api_key=8ca2abb7154c8c81ef7cb403c11eec32&language=en-US`;
};
