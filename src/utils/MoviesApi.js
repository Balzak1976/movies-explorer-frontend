const MOVIE_URL = 'https://api.nomoreparties.co';

class MoviesApi {
  constructor(params) {
    this._baseUrl = params.baseUrl;
  }

  getAllMovies() {
    return fetch(this._baseUrl + '/beatfilm-movies', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject({status: res.status, message: res.message});
    })
      .then(this._formatData);
  }

  _formatData = (res) => {
    res.splice(30);
    return res.map((v) => {
      return {
        country: v?.country,
        director: v?.director,
        duration: v?.duration,
        year: v?.year,
        description: v?.description,
        image: this._baseUrl + v?.image?.url,
        trailerLink: v?.trailerLink,
        thumbnail: this._baseUrl + v?.image?.formats?.thumbnail?.url,
        movieId: v?.id,
        nameRU: v?.nameRU,
        nameEN: v?.nameEN,
      };
    });
  }
}

export const moviesApi = new MoviesApi({ baseUrl: MOVIE_URL });
