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
    },
    {
      id: 2,
      type: 'email',
      name: 'email',
      title: 'E-mail',
      typeAttribute: 'email',
    },
    {
      id: 3,
      type: 'password',
      name: 'password',
      title: 'Пароль',
      typeAttribute: 'password',
      minLength: '2',
      maxLength: '14',
    },
  ],
};

function Register({ buttonSubmitState, onRegister, info }) {
  return (
    <div className="register">
      <Logo />
      
      <UserForm config={REGISTER} buttonSubmitState={buttonSubmitState} onUserForm={onRegister} info={info} />
    </div>
  );
}

export default Register;
