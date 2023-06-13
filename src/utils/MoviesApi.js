const MOVIE_URL = 'https://api.nomoreparties.co/beatfilm-movies';

class MoviesApi {
  constructor(params) {
    this._baseUrl = params.baseUrl;
  }

  getAllMovies() {
    return fetch(this._baseUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }
}

export const moviesApi = new MoviesApi({ baseUrl: MOVIE_URL });
