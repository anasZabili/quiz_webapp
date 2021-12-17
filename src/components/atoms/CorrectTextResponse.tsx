import { Typography } from "@mui/material";
import { styled } from "@mui/system";

const GreenTypography = styled(Typography)({
  color: "green",
});

interface CorrectTextReponseProps {}

const CorrectTextReponse: React.FC<CorrectTextReponseProps> = ({
  children,
}) => {
  return <GreenTypography>{children}</GreenTypography>;
};

export default CorrectTextReponse;
