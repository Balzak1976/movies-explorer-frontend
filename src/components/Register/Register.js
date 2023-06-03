import UserForm from '../UserForm/UserForm';

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

function Register({ buttonSubmitState, onRegister, info }) {
  return (
    <div className="wrapper">
      <UserForm config={REGISTER} buttonSubmitState={buttonSubmitState} onUserForm={onRegister} info={info} />
    </div>
  );
}

export default Register;
