import { Button } from "antd";
import { styled } from "styled-components";

export const CustomStyled = styled(Button)`
  font-size: 18px;
  color: #000000;
  width: 100%;
  height: 79px;
  border-radius: 4px !important ;
  border-color: #000000;
  border: none;
  &:hover {
    border-color: #000000 !important;
    color: white !important;
    background-color: #000000 !important;
  }
`;
