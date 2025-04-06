import PropTypes from "prop-types";

function FormSelect({
  label,
  name,
  value,
  onChange,
  required = false,
  options,
  placeholder = "اختر...",
  className = "",
}) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="
          mt-1 block w-full py-2 px-3 border  border-gray-300 bg-white rounded-md
          shadow-sm focus:outline-none focus:ring-[#f99026] focus:border-[#f99026]
          dark:border-none dark:bg-gray-700 dark:text-white"
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

FormSelect.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};

export default FormSelect;
