import Auth from '../Auth/Auth';

const LOGIN = {
  name: 'login',
  title: 'Рады видеть!',
  text: 'Ещё не зарегистрированы?',
  link: { to: '/signup', text: 'Регистрация' },
  btnTitleSaving: 'Войти...',
  btnTitle: 'Войти',
  inputs: [
    {
      id: 2,
      type: 'email',
      name: 'email',
      placeholder: 'E-mail',
      typeAttribute: 'email',
    },
    {
      id: 3,
      type: 'password',
      name: 'password',
      placeholder: 'Пароль',
      typeAttribute: 'password',
      minLength: '2',
      maxLength: '14',
    },
  ],
};

function Login({ buttonSubmitState, onLogin, info }) {
  return (
    <div className="wrapper">
      <Auth config={LOGIN} buttonSubmitState={buttonSubmitState} onAuth={onLogin} info={info}/>
    </div>
  );
}

export default Login;