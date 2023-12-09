const key = import.meta.env.VITE_TMDB_KEY;
const baseUrl = "https://api.themoviedb.org/3";

const details = (query, trend, page = 1) => {
  const endpoints = {
    popular: `${baseUrl}/movie/popular?api_key=${key}&page=${page}`,
    topRated: `${baseUrl}/movie/top_rated?api_key=${key}`,
    trending: `${baseUrl}/trending/${trend}/day?api_key=${key}`,
    comedy: `${baseUrl}/search/movie?api_key=${key}&language=en-US&query=comedy&page=1&include_adult=false`,
    upcoming: `${baseUrl}/movie/upcoming?api_key=${key}`,
    detailsMovie: `${baseUrl}/movie/${query}?api_key=${key}&append_to_response=videos `,
    popularTv: `${baseUrl}/tv/popular?api_key=${key}&page=${page}`,
    detailsTV: `${baseUrl}/tv/${query}?api_key=${key}&append_to_response=videos`,
    searchAll: `${baseUrl}/search/multi?api_key=${key}&query=${query}&page=${page}`,
    searchMovie: `${baseUrl}/search/movie?api_key=${key}&query=${query}&page=${page}`,
    searchTV: `${baseUrl}/search/tv?api_key=${key}&query=${query}&page=${page}`,
  };
  return endpoints;
};
export default details;
