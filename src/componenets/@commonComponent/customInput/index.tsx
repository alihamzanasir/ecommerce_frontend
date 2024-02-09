import React from "react";

const CustomInput = (props: any) => {
  return (
    <input
      style={{ height: "40px", width: "100%" }}
      className="custom_input"
      {...props}
    />
  );
};

export default CustomInput;
