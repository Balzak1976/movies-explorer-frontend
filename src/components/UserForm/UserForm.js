import React from 'react';
import { Link } from 'react-router-dom';
import { ValidationContext } from '../../contexts/ValidationContext';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import FormWithInput from './FormWithInput/FormWithInput';
import './UserForm.css';

function UserForm({ config: { title, text, link, ...rest }, buttonSubmitState, onUserForm, info, userData }) {
  const { values, handleChange, errors, isValid } = useFormAndValidation();

  const onSubmit = (e) => {
    e.preventDefault();

    onUserForm(values);
  };

  return (
    <section className="user-form">
      <h2 className={`user-form__title user-form__title_type_${rest.name}`}>{title}</h2>

      <ValidationContext.Provider value={[isValid, values, handleChange, errors]}>
        <FormWithInput
          config={rest}
          onSubmit={onSubmit}
          buttonSubmitState={buttonSubmitState}
          info={info}
          userData={userData}
        />
      </ValidationContext.Provider>

      {link && (
        <p className="user-form__text">
          {text}
          <Link
            className={`button button_type_user-form button_type_${rest.name}`}
            to={link.to}>
            {link.text}
          </Link>
        </p>
      )}
    </section>
  );
}

export default UserForm;
