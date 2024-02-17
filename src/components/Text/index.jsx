import React from "react";

const sizeClasses = {
  txtEpilogueRomanMedium24: "font-epilogue font-medium",
  txtEpilogueRomanMedium32: "font-epilogue font-medium",
  txtEpilogueRomanMedium64: "font-epilogue font-medium",
  txtEpilogueRomanMedium20: "font-epilogue font-medium",
  txtEpilogueRomanRegular12: "font-epilogue font-normal",
  txtDMSansBold24: "font-bold font-dmsans",
  txtDMSansBold13: "font-bold font-dmsans",
  txtEpilogueRomanMedium40: "font-epilogue font-medium",
  txtDMSansBold2021: "font-bold font-dmsans",
  txtEpilogueRomanRegular16Gray90087: "font-epilogue font-normal",
  txtEpilogueRomanRegular16: "font-epilogue font-normal",
  txtEpilogueRomanRegular14: "font-epilogue font-normal",
  txtEpilogueRomanMedium24WhiteA700: "font-epilogue font-medium",
  txtEpilogueRomanRegular16WhiteA700: "font-epilogue font-normal",
  txtDMSansRegular1732: "font-dmsans font-normal",
  txtEpilogueRomanRegular16Gray900: "font-epilogue font-normal",
  txtRobotoFlexSemiBold20: "font-robotoflex font-semibold",
  txtEpilogueRomanRegular14Gray900: "font-epilogue font-normal",
  txtEpilogueRomanSemiBold48: "font-epilogue font-semibold",
  txtEpilogueRomanSemiBold16: "font-epilogue font-semibold",
  txtDMSansBold1444: "font-bold font-dmsans",
  txtEpilogueRomanRegular14Gray90090: "font-epilogue font-normal",
  txtEpilogueRomanMedium28: "font-epilogue font-medium",
  txtEpilogueRomanMedium16: "font-epilogue font-medium",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
