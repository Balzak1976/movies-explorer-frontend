import './FormWithInput.css';
import { useContext } from 'react';
import { ValidationContext } from '../../../contexts/ValidationContext';
import Input from '../Input/Input';

function FormWithInput({ config, onSubmit, buttonSubmitState, info, onResetInfo }) {
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
              onResetInfo={onResetInfo}
            />
          ))}
        </fieldset>
      )}

      <div className={
        `form__info form__info_type_${config.name}
         ${info?.isError && 'form__info_error'}
         ${info?.isSuccess && 'form__info_success'}`
      }>
        {info?.message ?? ''}
      </div>

      <button
        className={`form__submit form__submit_type_${config.name}
        ${!isValid && `form__submit_inactive form__submit_type_${config.name}-inactive`}
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
