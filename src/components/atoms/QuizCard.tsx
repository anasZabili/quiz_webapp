import { Card as MuiCard, CardContent } from "@mui/material";

import { styled } from "@mui/system";

interface CardProps {
  children: React.ReactNode;
  onClick: () => void;
}

const StyledCard = styled(MuiCard)({
  minHeight: "60vh",
  borderRadius: "1rem",
  boxShadow: "0px 0px 10px 0px #535353",
  background: "url(/quiz_card_logo.jpg)",
  backgroundPosition: "center",
  backgroundSize: "cover",
  paddingTop: 0,
  cursor: "pointer",
});

const QuizCard: React.FC<CardProps> = ({ children, onClick }) => {
  return (
    <StyledCard onClick={onClick}>
      <CardContent>{children}</CardContent>
    </StyledCard>
  );
};

export default QuizCard;
