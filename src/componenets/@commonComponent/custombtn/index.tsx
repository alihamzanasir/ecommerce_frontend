import { ButtonProps } from "antd";
import { CustomStyled } from "./style";
interface BtnProps extends ButtonProps {
  text: string;
}

const CustomButton = ({ text, ...props }: BtnProps) => {
  return <CustomStyled {...props}>{text}</CustomStyled>;
};

export default CustomButton;
