import './Input.css';

function Input({
  config: { type, name, placeholder, typeAttribute, minLength, maxLength },
  value,
  onChange,
  error,
}) {
  return (
    <label className="form__field">
      <div className="form__input-text">{placeholder}</div>
      <input
        value={value ?? ''}
        onChange={onChange}
        className={`form__input form__input_type_${type}`}
        name={name}
        type={typeAttribute}
        minLength={minLength}
        maxLength={maxLength}
        required
      />
      <span
        className={`form__input-error ${error && 'form__input-error_active'}`}
      >
       {error}
      </span>
    </label>
  );
}

export default Input;