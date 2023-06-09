import './UserForm.css';
import { Link } from 'react-router-dom';
import { ValidationContext } from '../../contexts/ValidationContext';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import FormWithInput from './FormWithInput/FormWithInput';
import { useContext, useEffect } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function UserForm({
  config: { title, text, link, ...rest },
  buttonSubmitState,
  onUserForm,
  info,
  onResetInfo,
  isProfile = false,
}) {
  const { values, handleChange, errors, isValid, resetForm, setValues, setIsValid } = useFormAndValidation();
  const currentUser = useContext(CurrentUserContext);

  const onSubmit = (e) => {
    e.preventDefault();
    resetForm();

    onUserForm(values);
  };

  useEffect(() => {
    if (currentUser.name && currentUser.email) {
      setValues({ ...values, name: currentUser.name, email: currentUser.email });
    }
  }, [currentUser]);

  useEffect(() => {
    if (isProfile) {
      const isMatch = currentUser.name !== values.name || currentUser.email !== values.email;
      setIsValid((prev) => prev && isMatch);
    }
  }, [values]);

  return (
    <section className="user-form">
      <h2 className={`user-form__title user-form__title_type_${rest.name}`}>{title}</h2>

      <ValidationContext.Provider value={[isValid, values, handleChange, errors]}>
        <FormWithInput
          config={rest}
          onSubmit={onSubmit}
          buttonSubmitState={buttonSubmitState}
          info={info}
          onResetInfo={onResetInfo}
        />
      </ValidationContext.Provider>

      {link && (
        <p className="user-form__text">
          {text}
          <Link className={`button button_type_user-form button_type_${rest.name}`} to={link.to}>
            {link.text}
          </Link>
        </p>
      )}
    </section>
  );
}

export default UserForm;
