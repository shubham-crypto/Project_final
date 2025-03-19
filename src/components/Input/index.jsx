import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-[4px]", // Ensure you provide a valid value
};

const variants = {
  outline: {
    // Define properties if needed
  },
  white_A700_33_white_A700_33: "border-black-900 border-[0.5px] border-solid bg-gradient text-gray-see_01",
  fill: {
    white_A700: "bg-white-a700 shadow-sm text-gray-500_01",
  },
};

const sizes = {
  xs: "h-[48px] px-3 text-[16px]",
};

const Input = React.forwardRef(({
  className = "",
  name = "",
  placeholder = "",
  type = "text",
  children,
  label,
  prefix,
  suffix,
  onChange,
  shape,
  variant = "fill",
  size = "xs",
  color = "white_A700",
  ...restProps
}, ref) => {
  return (
    <label
      className={`${className} flex items-center justify-center cursor-text font-inter ${(shape && shapes[shape]) || ""} ${variants[variant]?.[color] || variants[variant] || ""} ${sizes[size] || ""}`}
    >
      {!!label && <span>{label}</span>}
      {!!prefix && <span>{prefix}</span>}
      <input
        ref={ref}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        {...restProps}
      />
      {!!suffix && <span>{suffix}</span>}
      {children}
    </label>
  );
});

Input.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  shape: PropTypes.oneOf(["square"]),
  size: PropTypes.oneOf(["xs"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf(["white_A700_33_white_A700_33", "white_A700"]),
  onChange: PropTypes.func, // Added onChange prop type
};

export { Input };
