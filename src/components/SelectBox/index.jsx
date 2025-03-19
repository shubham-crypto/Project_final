import React from "react"; 
import Select from "react-select"; 
import PropTypes from "prop-types"; 
 
const shapes = { 
  round: "rounded-[5px]", // Corrected the value to a valid Tailwind class 
}; 
 
const variants = { 
  fill:{ 
    blue_gray_800_01: "bg-blue_gray-800_01 text-white-a700", // Fixed the name and value 
  }, 
}; 
 
const sizes = { 
  xs: "h-[30px] px-1.5 text-[14px]", // Corrected syntax 
}; 
 
const SelectBox = React.forwardRef( 
  ( 
    { className = "", options = [], isSearchable = false, isMulti = false, indicator, shape, variant = "fill", size = "xs",color = "blue_gray_800_01", ...restProps }, 
    ref, 
  ) => { 
    return ( 
      <Select 
        ref={ref} 
        options={options} 
        className={`${className} flex ${shape ? shapes[shape] : ""} ${sizes.x} ${variants[variant] || variants[color] || ""}`}
        isSearchable={isSearchable} 
        isMulti={isMulti} 
        components={{ 
          IndicatorSeparator: () => null, 
          DropdownIndicator: () => indicator, 
        }} 
        styles={{ 
          indicatorContainer: (provided) => ({ 
            ...provided, 
            padding: undefined, 
            flexShrink: undefined, 
            width: "max-content", 
            "& > div": {padding:0} 
          }), 
          container: (provided) => ({ 
            ...provided, 
            zIndex:0, 
            alignItems: "center", 
          }), 
          control: (provided) => ({ 
            ...provided, 
            backgroundColor: "transparent", 
            border: "0 !important", 
            boxShadow: "none !important", 
            minHeight: "auto", 
            "&:hover": { 
              border: "0 !important", 
            }, 
          }), 
          input: (provided) => ({ 
            ...provided, 
            color: "inherit", 
          }), 
          option: (provided, state) => ({ 
            ...provided, 
            color: "#000", 
          }), 
          singleValue: (provided) => ({ 
            ...provided, 
            marginLeft: undefined, 
            marginRight: undefined, 
          }), 
          valueContainer: (provided) => ({ 
            ...provided, 
            padding: 0, 
            display: "flex", 
            flexWrap: undefined, 
          }), 
          placeholder: (provided) => ({ 
            ...provided, 
            margin: 0, 
          }), 
          menuPortal: (base) => ({ ...base, zIndex: 999999 }), 
          menu:({width, ...css})=> ({...css}), 
        }} 
 
        menuPortableTarget={document.body} 
 
        closeMenuOnScroll = { (event)=>{ 
          return event.target.id === "scrollContainer"; 
        }} 
 
        {...restProps} 
      /> 
    ); 
  } 
); 
 
Selection.propTypes = { 
  className: PropTypes.string, 
  options: PropTypes.array, 
  isSearchable: PropTypes.bool, 
  isMulti: PropTypes.bool, 
  onChange: PropTypes.func, 
  value: PropTypes.string, 
  indicator: PropTypes.node, 
  shape: PropTypes.oneOf(["round"]), 
  size: PropTypes.oneOf(["xs"]), 
  variant: PropTypes.oneOf(["fill"]), 
  color: PropTypes.oneOf(["blue_gray_800_01"]), 
}; 
 
export { SelectBox };