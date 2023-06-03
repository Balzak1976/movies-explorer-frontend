import './Auth.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import { ValidationContext } from '../../contexts/ValidationContext';
import FormWithInput from './FormWithInput/FormWithInput';
import Logo from '../Header/Logo/Logo';



function Auth({ config: {title, text, link, ...rest}, buttonSubmitState, onAuth, info }) {
  const { values, handleChange, errors, isValid } = useFormAndValidation();

  const onSubmit = (e) => {
    e.preventDefault();

    onAuth(values);
  };

  return (
    <section className="auth">
      <Logo />

      <h2 className="auth__title">{title}</h2>

      <ValidationContext.Provider value={[isValid, values, handleChange, errors]}>
        <FormWithInput config={rest} onSubmit={onSubmit} buttonSubmitState={buttonSubmitState} info={info} />
      </ValidationContext.Provider>

      <p className="auth__text">
        {text}
        <Link className="button button_type_auth" to={link.to}>
         {link.text}
        </Link>
      </p>
    </section>
  );
}

export default Auth;
