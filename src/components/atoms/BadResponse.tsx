import { Typography } from "@mui/material";
import { styled } from "@mui/system";

const GreenTypography = styled(Typography)({
  color: "#f66666",
  fontWeight: "bold",
});

interface BadTextReponseProps {}

const BadTextReponse: React.FC<BadTextReponseProps> = ({ children }) => {
  return <GreenTypography>{children}</GreenTypography>;
};

export default BadTextReponse;
