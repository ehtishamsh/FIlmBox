const key = import.meta.env.VITE_TMDB_KEY;
const baseUrl = "https://api.themoviedb.org/3";

const details = (query, trend) => {
  const endpoints = {
    popular: `${baseUrl}/movie/popular?api_key=${key}`,
    topRated: `${baseUrl}/movie/top_rated?api_key=${key}`,
    trending: `${baseUrl}/trending/${trend}/day?api_key=${key}`,
    comedy: `${baseUrl}/search/movie?api_key=${key}&language=en-US&query=comedy&page=1&include_adult=false`,
    upcoming: `${baseUrl}/movie/upcoming?api_key=${key}`,
    detailsMovie: `${baseUrl}/movie/${query}?api_key=${key}`,
    popularTv: `${baseUrl}/tv/popular?api_key=${key}`,
    detailsTV: `${baseUrl}/tv/${query}?api_key=${key}`,
    searchAll: `${baseUrl}/search/multi?api_key=${key}&query=${query}`,
    searchMovie: `${baseUrl}/search/movie?api_key=${key}&query=${query}`,
    searchTV: `${baseUrl}/search/tv?api_key=${key}&query=${query}`,
  };
  return endpoints;
};
export default details;
