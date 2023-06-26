import './Input.css';

function Input({
  config: { type, name, title, placeholder, typeAttribute, minLength, maxLength },
  value,
  onChange,
  error,
  onResetInfo,
}) {
  const handleChange = (event) => {
    onChange(event);
    onResetInfo();
  };

  return (
    <label className={`form__field form__field_type_${type}`}>
      <span className={`form__input-title form__input-title_type_${type}`}>{title}</span>
      <input
        value={value ?? ''}
        onChange={handleChange}
        className={`form__input form__input_type_${type}`}
        placeholder={placeholder ?? ''}
        name={name}
        type={typeAttribute}
        minLength={minLength}
        maxLength={maxLength}
        required
      />
      <span className={`form__input-error form__input-error_type_${type} ${error && 'form__input-error_active'}`}>
        {error}
      </span>
    </label>
  );
}

export default Input;
