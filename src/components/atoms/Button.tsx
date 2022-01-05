import { Button as MuiButton } from "@mui/material";
import { styled } from "@mui/system";

const StyledButton = styled(MuiButton)({});

interface ButtonProps {
  children: React.ReactNode;
  [x: string]: any;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
