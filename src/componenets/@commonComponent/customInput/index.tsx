import React from "react";
import InputBase from "@mui/material/InputBase";
import { TextField } from "@mui/material";

const CustomInput = (props: any) => {
  return (
    <TextField style={{ width: "100%" }} className="custom_input" {...props} />
  );
};

export default CustomInput;
