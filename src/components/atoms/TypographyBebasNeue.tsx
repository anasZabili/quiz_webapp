import { Typography as MuiTypography } from "@mui/material";
import { styled } from "@mui/system";

interface TypoGraphyBebasNeueProps {
  children: React.ReactNode;
  [x: string]: any;
}

const Typography = styled(MuiTypography)({
  fontFamily: "Bebas Neue",
});

const TypoGraphyBebasNeue: React.FC<TypoGraphyBebasNeueProps> = ({
  children,
  ...props
}) => {
  return <Typography {...props}>{children}</Typography>;
};

export default TypoGraphyBebasNeue;
