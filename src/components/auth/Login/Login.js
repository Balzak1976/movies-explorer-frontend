import './Login.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { useFormAndValidation } from '../../../hooks/useFormAndValidation';
import { ValidationContext } from '../../../contexts/ValidationContext';
import FormWithInput from '../FormWithInput/FormWithInput';
import Logo from '../../Header/Logo/Logo';

const LOGIN = {
  name: 'login',
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

function Login({ buttonSubmitState, onRegister }) {
  const { values, handleChange, errors, isValid } = useFormAndValidation();

  const onSubmit = (e) => {
    e.preventDefault();

    onRegister(values);
  };

  return (
    <div className="wrapper">
      <section className="register">
        <Logo />

        <h2 className="register__title">Рады видеть!</h2>

        <ValidationContext.Provider value={[isValid, values, handleChange, errors]}>
          <FormWithInput config={LOGIN} onSubmit={onSubmit} buttonSubmitState={buttonSubmitState} />
        </ValidationContext.Provider>

        <p className="register__text">
          Ещё не зарегистрированы?
          <Link className="button button_type_register" to="/signup">
            Регистрация
          </Link>
        </p>
      </section>
    </div>
  );
}

export default Login;
