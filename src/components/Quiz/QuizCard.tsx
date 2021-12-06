import { Card, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { QuizState } from ".";

const StyledCard = styled(Card)({
  // padding: "20rem 0",
  minHeight: "60vh",
  borderRadius: "1rem",
  boxShadow: "0px 0px 10px 0px #535353",
  // background: "linear-gradient(45deg, #535353 85%,#ff00006c)",
  background: "url(/quiz_card_logo.jpg)",
  backgroundPosition: "center",
  backgroundSize: "cover",
  paddingTop: 0,
});

const Title = styled("h1")({
  fontSize: "1.3rem",
  color: "#7ff5fe",
  textAlign: "center",
  textShadow: "0 0 2px #fff,0 0 4px #fe82ef, 0 0 7px #fe82ef",
  letterSpacing: "0.1rem",
  // textShadow: "0px 1px 5px #fe82ef",

  // place the text at the top of the card
  marginTop: "0",
});

interface QuizCardProps {
  question: QuizState["quiz"][number];
}

const QuizCard: React.FC<QuizCardProps> = ({ question }) => {
  return (
    <StyledCard>
      <CardContent>
        <Title>{question.name}</Title>
      </CardContent>
    </StyledCard>
  );
};

export default QuizCard;
