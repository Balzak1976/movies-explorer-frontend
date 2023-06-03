import Auth from '../Auth/Auth';

const REGISTER = {
  name: 'register',
  title: 'Добро пожаловать!',
  text: 'Уже зарегистрированы?',
  link: { to: '/signin', text: 'Войти' },
  btnTitleSaving: 'Зарегистрироваться...',
  btnTitle: 'Зарегистрироваться',
  inputs: [
    {
      id: 1,
      type: 'name',
      name: 'name',
      placeholder: 'Имя',
      typeAttribute: 'text',
    },
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

function Register({ buttonSubmitState, onRegister }) {
  return (
    <div className="wrapper">
      <Auth config={REGISTER} buttonSubmitState={buttonSubmitState} onAuth={onRegister} />
    </div>
  );
}

export default Register;
