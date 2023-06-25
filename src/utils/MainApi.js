const BASE_URL = 'https://api.skor.nomoredomains.monster';
// const BASE_URL = 'http://localhost:3000';

class MainApi {
  constructor(params) {
    this._baseUrl = params.baseUrl;
  }

  register(newUser) {
    return this._request('/signup', 'POST', newUser);
  }

  authorize(user) {
    return this._request('/signin', 'POST', user);
  }

  updateUser(user) {
    const token = localStorage.getItem('jwt');

    return this._request('/users/me', 'PATCH', { token, ...user });
  }

  checkToken(token) {
    return this._request('/users/me', 'GET', { token });
  }

  getMovies(movies) {
    const token = localStorage.getItem('jwt');

    return this._request('/movies', 'GET', { token, ...movies });
  }

  saveMovie(movie) {
    const token = localStorage.getItem('jwt');
    delete movie.isLiked;
    return this._request('/movies', 'POST', { token, ...movie });
  }

  deleteMovie(movie) {
    const token = localStorage.getItem('jwt');

    return this._request(`/movies/${movie._id}`, 'DELETE', { token, ...movie });
  }

  _request(url, typeMethod, { token, ...options }) {
    return fetch(this._baseUrl + url, {
      method: typeMethod,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: typeMethod === 'GET' ? null : JSON.stringify(options),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }
}

export const mainApi = new MainApi({ baseUrl: BASE_URL });
