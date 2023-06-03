import React from 'react';
import { Link } from 'react-router-dom';
import { ValidationContext } from '../../contexts/ValidationContext';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import FormWithInput from './FormWithInput/FormWithInput';
import Logo from '../Header/Logo/Logo';
import './UserForm.css';



function UserForm({ config: {title, text, link, ...rest}, buttonSubmitState, onUserForm, info }) {
  const { values, handleChange, errors, isValid } = useFormAndValidation();

  const onSubmit = (e) => {
    e.preventDefault();

    onUserForm(values);
  };

  return (
    <section className="user-form">
      <Logo />

      <h2 className="user-form__title">{title}</h2>

      <ValidationContext.Provider value={[isValid, values, handleChange, errors]}>
        <FormWithInput config={rest} onSubmit={onSubmit} buttonSubmitState={buttonSubmitState} info={info} />
      </ValidationContext.Provider>

      <p className="user-form__text">
        {text}
        <Link className="button button_type_user-form" to={link.to}>
         {link.text}
        </Link>
      </p>
    </section>
  );
}

export default UserForm;
