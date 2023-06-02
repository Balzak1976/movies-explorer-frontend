import './Register.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { useFormAndValidation } from '../../../hooks/useFormAndValidation';
import { ValidationContext } from '../../../contexts/ValidationContext';
import FormWithInput from '../FormWithInput/FormWithInput';
import Logo from '../../Header/Logo/Logo';

const REGISTER = {
  name: 'register',
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

  const { values, handleChange, errors, isValid } = useFormAndValidation();

  const onSubmit = (e) => {
    e.preventDefault();

    onRegister(values);
  };

  return (
    <div className="wrapper">
      <section className="register">
        <Logo />

        <h2 className="register__title">Добро пожаловать!</h2>

        <ValidationContext.Provider value={[isValid, values, handleChange, errors]}>
          <FormWithInput config={REGISTER} onSubmit={onSubmit} buttonSubmitState={buttonSubmitState} />
        </ValidationContext.Provider>

        <p className="register__text">
          Уже зарегистрированы?
          <Link className="button button_type_register" to="/signin">
            Войти
          </Link>
        </p>
      </section>
    </div>
  );
}

export default Register;
