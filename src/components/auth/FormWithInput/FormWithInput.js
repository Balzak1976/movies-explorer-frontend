import './FormWithInput.css';
import { useContext } from 'react';
import { ValidationContext } from '../../../contexts/ValidationContext';
import Input from '../Input/Input';

function FormWithInput({ config, onSubmit, buttonSubmitState, info = true }) {
  const validation = useContext(ValidationContext);

  const [isValid, values, handleChange, errors] = validation;

  return (
    <form className={`form form_type_${config.name}`} name={config.name} onSubmit={onSubmit} noValidate>
      {config.inputs && (
        <fieldset className="form__container">
          {config.inputs.map(({ id, ...input }) => (
            <Input
              key={id}
              config={input}
              value={values[input.name]}
              onChange={handleChange}
              error={errors[input.name]}
            />
          ))}
        </fieldset>
      )}

      <div className={`form__info ${info && 'form__info_active'}`}>
        {'Что-то пошло не так...'}
      </div>

      <button
        className={`form__submit form__submit_type_${config.name}
        ${!isValid && 'form__submit_inactive'}
      `}
        name="submit"
        type="submit"
        disabled={!isValid}>
        {buttonSubmitState ? config.btnTitleSaving : config.btnTitle}
      </button>
    </form>
  );
}

export default FormWithInput;
