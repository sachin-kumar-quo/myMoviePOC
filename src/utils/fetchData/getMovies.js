export const getMovies = async (url) => {
  try {
    let response = await fetch(url);
    let json = await response.json();
    let result = json.results;
    return result;
  } catch (error) {
    alert(error);
  }
};

export const getSearchMovies = async (url) => {
  try {
    let response = await fetch(url);
    let json = await response.json();
    let result = json.results;
    return result;
  } catch (error) {
    alert(error);
  }
};

export const getMovie = async (url) => {
  try {
    let response = await fetch(url);
    let json = await response.json();
    return json;
  } catch (error) {
    alert(error);
  }
};
