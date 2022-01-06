import { Button as MuiButton } from "@mui/material";
import { styled } from "@mui/system";

const StyledButton = styled(MuiButton)({
  backgroundColor: "#918a8a",
  fontWeight: "bold",
  ":disabled": {
    backgroundColor: "#201c1cb5",
    color: "#5e5b5b",
  },
});

interface ButtonProps {
  children: React.ReactNode;
  [x: string]: any;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
