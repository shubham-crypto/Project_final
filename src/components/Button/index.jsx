import React from "react";
import PropTypes from "prop-types";
const shapes = {
    circle: "rounded-[50%]", round: "rounded-[12px]", square: "rounded-[0px]",
};
const variants =
{
    fill: {
        white_A700: "bg-white-a700",
        blue_A700_01: "bg-blue-a700_01 text-white-a700",
        blue_gray_800_01: "bg-blue_gray-800_01 text-white-a700", blue_A700: "bg-blue-a700 text-white-a700",
        gray_600: "bg-gray-600 text-white-a700",
        deep_orange_A700: "bg-deep_orange-a700 text-white-a700", gray_100_01: "bg-gray-100_01 text-black-900",
    },
};

const sizes = {
    lg: "h-[56px] px-0.5",
    x1: "h-[60px] px-6 text-[29px]",
    sm: "h-[32px] px-[26px] text-[14px]",
    md: "h-[42px] px-[26px] text-[16px]",
    xs: "h-[24px] pl-[26px] pr-1.5 text-[11px]",
    "2x1": "h-[64px] px-[34px] text-[16px]",
};


const Button = ({
    children,
    className = "",
    leftIcon,
    rightIcon,
    shape,
    variant = "fill",
    size = "2x1",
    color = "gray_100_01",
    ...restProps
}) => {
    return (
        <button
            className={`${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
            {...restProps}
        >
            {!!leftIcon && leftIcon}
            {children}
            {!!rightIcon && rightIcon}

        </button>
    );
};

Button.propTypes = {
    className: PropTypes.string, children: PropTypes.node,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    shape: PropTypes.oneOf(["circle", "round", "square"]),
    size: PropTypes.oneOf(["lg", "x1", "sm", "md", "xs", "2x1"]),
    variant: PropTypes.oneOf(["fill"]),
    color: PropTypes.oneOf([
        "white_A700",
        "blue_A700_01",
        "blue_gray_800_01",
        "blue_A700",
        "gray_600",
        "deep_orange_A700",
        "gray_100_01",
    ]),
};
export { Button };