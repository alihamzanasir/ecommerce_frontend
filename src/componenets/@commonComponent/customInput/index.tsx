import { InputProps } from "antd";
import { CustomStyled } from "./style";

const CustomInput = ({ ...props }: InputProps) => {
  return <CustomStyled {...props} />;
};

export default CustomInput;
