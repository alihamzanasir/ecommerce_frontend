import Button, { ButtonProps } from "@mui/material/Button";
import "./style.scss"

interface TypeCheck extends ButtonProps {
  text: string;
}
const CustomButton = ({ text, ...props }: TypeCheck) => {
  return (
    <Button className="btnClass" variant="contained" {...props}>
      {text}
    </Button>
  );
};

export default CustomButton;
