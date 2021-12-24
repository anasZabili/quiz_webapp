import { Typography } from "@mui/material";
import { styled } from "@mui/system";

const GreenTypography = styled(Typography)({
  textAlign: "center",
  maxWidth: "500px",
  color: "#6aeb7f",
  fontWeight: "bold",
});

const RedTypography = styled(GreenTypography)({
  color: "#f66666",
});

interface TextReponseProps {
  children: React.ReactNode;
  isCorrect: boolean;
}

const TextReponse: React.FC<TextReponseProps> = ({ isCorrect, children }) => {
  return isCorrect ? (
    <GreenTypography>{children}</GreenTypography>
  ) : (
    <RedTypography>{children}</RedTypography>
  );
};

export default TextReponse;
