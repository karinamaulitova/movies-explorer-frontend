import { useEffect, useState } from 'react';
import MainApi from './MainApi';
import MoviesApi from './MoviesApi';

const MOVIES_KEY = 'movies';
const FILTER_TEXT_KEY = 'filter';
const FILTER_CHECKBOX_KEY = 'checkbox'

function storeState(key, state) {
  try {
    localStorage.setItem(key, JSON.stringify(state));
  } catch (e) {
    console.log(e.message);
  }
}

function loadInitialState(key, fallbackValue) {
  let state = fallbackValue;
  try {
    const maybeState = localStorage.getItem(key);
    if (maybeState) {
      state = JSON.parse(maybeState);
    }
  } catch (e) {
    console.log(e.message);
  }
  return state;
}

function convertMovieToSaveFormat(movie) {
  return {
    id: movie.id,
    image: `https://api.nomoreparties.co${movie.image.url}`,
    description: movie.description,
    year: movie.year,
    director: movie.director,
    country: movie.country,
    duration: movie.duration,
    trailerLink: movie.trailerLink,
    nameEN: movie.nameEN,
    nameRU: movie.nameRU,
    thumbnail: movie.thumbnail,
  };
}

export function useMovies({ initialSize, moreSize }) {
  const [filterText, setFilterText] = useState(
    loadInitialState(FILTER_TEXT_KEY, '')
  );
  const [isChecked, setIsChecked] = useState(loadInitialState(FILTER_CHECKBOX_KEY, false));
  const [allMovies, setAllMovies] = useState(loadInitialState(MOVIES_KEY, []));
  const [savedMovies, setSavedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingError, setIsLoadingError] = useState(false);
  const [moreCounter, setMoreCounter] = useState(0);

  const reloadSavedMovies = () => {
    setIsLoading(true);
    setIsLoadingError(false);
    MainApi.getSavedMovies()
      .then((data) => {
        setSavedMovies(data.data);
      })
      .catch(() => {
        setIsLoadingError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (allMovies.length > 0) {
      return;
    }
    setIsLoading(true);
    setIsLoadingError(false);

    MoviesApi.getMovies()
      .then((data) => {
        setAllMovies(data);
        storeState(MOVIES_KEY, data);
      })
      .catch(() => {
        setIsLoadingError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [allMovies.length]);

  useEffect(() => {
    reloadSavedMovies();
  }, []);

  const outputSize = initialSize + moreCounter * moreSize;

  const loadMore = () => setMoreCounter((i) => i + 1);

  const filterRegExp = new RegExp(filterText, 'i');

  const filteredMovies = allMovies
    .map((movie) => {
      if (savedMovies.find((m) => m.movieId === movie.id)) {
        movie.saved = true;
      } else {
        movie.saved = false;
      }
      return movie;
    })
    .filter((movie) => !isChecked || movie.duration < 40)
    .filter(
      (movie) =>
        filterRegExp.test(movie.nameRU) || filterRegExp.test(movie.nameEN)
    );

  const hasMore = Boolean(filterText) && filteredMovies.length > outputSize;

  const movies = filteredMovies.slice(0, outputSize);

  const isNothingFound = filterText && movies.length === 0;

  const saveMovieById = (id) => {
    const movie = allMovies.find((m) => m.id === id);
    const moiveToSave = convertMovieToSaveFormat(movie);
    MainApi.saveMovie(moiveToSave).then(reloadSavedMovies);
  };

  const deleteMovieById = (id) => {
    MainApi.deleteMovie(id).then(reloadSavedMovies);
  };

  return {
    movies: !filterText ? [] : movies,
    isLoading,
    isLoadingError,
    isNothingFound,
    loadMore,
    hasMore,
    filterText,
    setFilterText: (text) => {
      storeState(FILTER_TEXT_KEY, text);
      setFilterText(text);
    },
    setIsChecked: (isChecked) => {
      storeState(FILTER_CHECKBOX_KEY, isChecked);
      setIsChecked(isChecked);
    },
    saveMovieById,
    deleteMovieById,
  };
}
