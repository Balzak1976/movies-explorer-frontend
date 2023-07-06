import './Register.css';
import UserForm from '../UserForm/UserForm';
import Logo from '../Header/Logo/Logo';

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
      title: 'Имя',
      typeAttribute: 'text',
      minlength: 2,
      maxlength: 30,
      pattern: '[\\w\\sА-яЁё]+',
    },
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
      minLength: '8',
      maxLength: '14',
    },
  ],
};

function Register({ buttonSubmitState, onRegister, info, onResetInfo }) {
  return (
    <div className="register">
      <Logo />

      <UserForm
        config={REGISTER}
        buttonSubmitState={buttonSubmitState}
        onUserForm={onRegister}
        info={info}
        onResetInfo={onResetInfo}
      />
    </div>
  );
}

export default Register;
