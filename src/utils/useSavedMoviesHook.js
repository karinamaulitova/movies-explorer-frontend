import { useEffect, useState } from 'react';
import MainApi from './MainApi';

export function useSavedMovies() {
  const [filterText, setFilterText] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);

  const reloadSavedMovies = () => {
    MainApi.getSavedMovies()
      .then((data) => {
        setSavedMovies(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    reloadSavedMovies();
  }, []);

  const filterRegExp = new RegExp(filterText, 'i');

  const filteredMovies = savedMovies
    .filter((movie) => !isChecked || movie.duration < 40)
    .filter(
      (movie) =>
        filterRegExp.test(movie.nameRU) || filterRegExp.test(movie.nameEN)
    );

  const movies = filteredMovies;

  const isNothingFound = filterText && movies.length === 0;

  const deleteSavedMovieById = (id) => {
    MainApi.deleteMovie(id).then(reloadSavedMovies);
  };

  return {
    movies: movies,
    isNothingFound,
    filterText,
    setFilterText: (text) => {
      setFilterText(text);
    },
    isChecked,
    setIsChecked: (isChecked) => {
      setIsChecked(isChecked);
    },
    deleteSavedMovieById,
  };
}
