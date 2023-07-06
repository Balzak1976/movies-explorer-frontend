import UserForm from '../UserForm/UserForm';
import Logo from '../Header/Logo/Logo';
import './Login.css';

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
      title: 'E-mail',
      typeAttribute: 'email',
      pattern: '[a-z0-9._%+\\-]+@[a-z0-9.\\-]+\\.[a-z]{2,}',
    },
    {
      id: 3,
      type: 'password',
      name: 'password',
      title: 'Пароль',
      typeAttribute: 'password',
      minLength: '2',
      maxLength: '14',
      pattern: '[!-z]',
    },
  ],
};

function Login({ buttonSubmitState, onLogin, info, onResetInfo }) {
  return (
    <div className="login">
      <Logo />

      <UserForm
        config={LOGIN}
        buttonSubmitState={buttonSubmitState}
        onUserForm={onLogin}
        info={info}
        onResetInfo={onResetInfo}
      />
    </div>
  );
}

export default Login;
