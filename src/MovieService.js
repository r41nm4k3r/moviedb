import axios from 'axios';
import { API_BASE_URL, API_KEY } from './config';

export const getCurrentMovies = async () => {
  const response = await axios.get(`${API_BASE_URL}/movie/now_playing`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data.results;
};

export const getTrendingMovies = async () => {
  const response = await axios.get(`${API_BASE_URL}/trending/movie/week`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data.results;
};

export const getMovieDetails = async (movieId) => {
  const response = await axios.get(`${API_BASE_URL}/movie/${movieId}`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data;
};

export const getMovieCast = async (movieId) => {
  const response = await axios.get(`${API_BASE_URL}/movie/${movieId}/credits`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data.cast;
};

export const getTrendingTVSeries = async () => {
  const response = await axios.get(`${API_BASE_URL}/trending/tv/week`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data.results;
};

export const getTVSeriesDetails = async (tvSeriesId) => {
  const response = await axios.get(`${API_BASE_URL}/tv/${tvSeriesId}`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data;
};

export const getTVSeriesCast = async (tvSeriesId) => {
  const response = await axios.get(`${API_BASE_URL}/tv/${tvSeriesId}/credits`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data.cast;
};

export const getActorDetails = async (actorId) => {
  const response = await axios.get(`${API_BASE_URL}/person/${actorId}`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data;
};

export const getActorFilmography = async (actorId) => {
  const response = await axios.get(`${API_BASE_URL}/person/${actorId}/movie_credits`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data.cast; // Assuming we're interested in the cast roles
};
