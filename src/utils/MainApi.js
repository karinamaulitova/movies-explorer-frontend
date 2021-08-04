const handleOriginalResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
};

class Api {
  constructor(options) {
    this._options = options;
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  getUserInfo() {
    return fetch(this._baseUrl + '/users/me', {
      headers: this._headers,
      credentials: 'include',
    }).then(handleOriginalResponse);
  }

  changeUserInfo(data) {
    return fetch(this._baseUrl + '/users/me', {
      method: 'PATCH',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
      }),
    }).then(handleOriginalResponse);
  }

  getSavedMovies() {
    return fetch(this._baseUrl + '/movies', {
      headers: this._headers,
      credentials: 'include',
    }).then(handleOriginalResponse);
  }

  saveMovie(movieData) {
    return fetch(this._baseUrl + '/movies', {
      method: 'POST',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify(movieData),
    }).then(handleOriginalResponse);
  }

  deleteMovie(movieId) {
    return fetch(`${this._baseUrl}/movies/${movieId}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: this._headers,
    }).then(handleOriginalResponse);
  }

}

const MainApi = new Api({
  baseUrl: 'https://api.karina.movie.students.nomoredomains.monster',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default MainApi;
