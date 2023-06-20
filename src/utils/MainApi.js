// const BASE_URL = 'https://api.skor.nomoredomains.monster';
const BASE_URL = 'http://localhost:3000';

class MainApi {
  constructor(params) {
    this._baseUrl = params.baseUrl;
  }

  register(options) {
    return this._request('/signup', 'POST', options);
  }

  authorize(options) {
    return this._request('/signin', 'POST', options);
  }

  updateUser(options) {
    const token = localStorage.getItem('jwt');

    return this._request('/users/me', 'PATCH', { token, ...options });
  }

  checkToken(token) {
    return this._request('/users/me', 'GET', { token });
  }

  getMovies(options) {
    const token = localStorage.getItem('jwt');

    return this._request('/movies', 'GET', { token, ...options });
  }

  saveMovie(options) {
    const token = localStorage.getItem('jwt');

    return this._request('/movies', 'POST', { token, ...options });
  }

  deleteMovie(options) {
    const token = localStorage.getItem('jwt');

    return this._request(`/movies/${options.id}`, 'DELETE', { token, ...options });
  }

  _getToken =() => {
  return localStorage.getItem('jwt');
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
