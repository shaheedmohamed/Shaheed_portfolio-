import PropTypes from "prop-types";

function FormInput({
  label,
  name,
  type = "text",
  value,
  onChange,
  required = false,
  min,
  placeholder,
  className = "",
  ...props
}) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
      >
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        min={min}
        placeholder={placeholder}
        className="
         mt-1 block w-full py-2 px-3 border  border-gray-300 bg-white rounded-md
         shadow-sm focus:outline-none focus:ring-[#f99026] focus:border-[#f99026] 
         dark:border-none dark:bg-gray-700 dark:text-white"
        {...props}
      />
    </div>
  );
}

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  min: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.string,
  className: PropTypes.string,
};

export default FormInput;
