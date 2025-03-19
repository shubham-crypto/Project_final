import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-sm", 
};

const variants = {
  tarFillwhiteA700: "bg-white-a700", 
};

const sizes = {
  xs: "h-[142px] p-5 text-[14px]", 
};

const TextArea = React.forwardRef(({
  className = "",
  name = "",
  placeholder = "",
  shape,
  size = "xs",
  variant = "tarFillwhiteA700",
  onChange,
  ...restProps
}, ref) => {
  const handleChange = (e) => {
    if (onChange) onChange(e?.target?.value);
  };

  return (
    <textarea
      ref={ref}
      className={`${className} ${(shape && shapes[shape]) || ""} ${sizes[size] || ""} ${variants[variant] || ""}`}
      name={name}
      onChange={handleChange}
      placeholder={placeholder}
      {...restProps}
    />
  );
});

TextArea.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs"]),
  variant: PropTypes.oneOf(["tarFillwhiteA700"]),
  onChange: PropTypes.func, 
};

export { TextArea };
