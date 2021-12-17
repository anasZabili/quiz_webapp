import { Box, styled } from "@mui/system";

const StyledBox = styled(Box)({
  display: "grid",
  justifyContent: "center",
  gridTemplateColumns: "auto",
  gridGap: "1rem",
  alignItems: "center",
});

interface CenterBoxProps {
  children: React.ReactNode;
}

const CenterBox: React.FC<CenterBoxProps> = ({ children }) => {
  return <StyledBox>{children}</StyledBox>;
};

export default CenterBox;
