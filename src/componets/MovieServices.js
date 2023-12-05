const key = import.meta.env.VITE_TMDB_KEY;
const baseUrl = "https://api.themoviedb.org/3";

const details = (movieID, trend) => {
  const endpoints = {
    popular: `${baseUrl}/movie/popular?api_key=${key}`,
    topRated: `${baseUrl}/movie/top_rated?api_key=${key}`,
    trending: `${baseUrl}/trending/${trend}/day?api_key=${key}`,
    comedy: `${baseUrl}/search/movie?api_key=${key}&language=en-US&query=comedy&page=1&include_adult=false`,
    upcoming: `${baseUrl}/movie/upcoming?api_key=${key}`,
    detailsMovie: `${baseUrl}/movie/${movieID}?api_key=${key}`,
    popularTv: `${baseUrl}/tv/popular?api_key=${key}`,
    detailsTV: `${baseUrl}/tv/${movieID}?api_key=${key}`,
  };
  return endpoints;
};
export default details;
