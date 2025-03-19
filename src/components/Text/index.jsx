import React from "react";

const sizes = {
  textxs: "text-[12px] font-normal not-italic",
  texts: "text-[16px] font-normal not-italic",
  textmd: "text-[15px] font-normal not-italic",
  textlg: "text-[16px] font-normal not-italic",
  textxl: "text-[18px] font-normal not-italic",
  text2x1: "text-[21px] font-light",
};

const Text = ({ children, className = "",as, size = "texts", ...restProps }) => {
  const Component = as || "p";
  return (
    <Component className={`text-white-a700 font-mulish ${className} ${sizes[size]}} {...restProps`}>
      {children}
    </Component>
  );
};

export { Text };