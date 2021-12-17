import { Card, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router";
import { QuizInfoState } from ".";

const StyledCard = styled(Card)({
  // padding: "20rem 0",
  minHeight: "60vh",
  borderRadius: "1rem",
  boxShadow: "0px 0px 10px 0px #535353",
  // background: "linear-gradient(45deg, #535353 85%,#ff00006c)",
  // add red filter above the background
  background: "url(/quiz_card_logo.jpg)",
  backgroundPosition: "center",
  backgroundSize: "cover",
  paddingTop: 0,
  cursor: "pointer",
});

const Title = styled("h1")({
  fontSize: "1.3rem",
  color: "grey",
  textAlign: "center",
  // textShadow: "0 0 1px #fff,0 0 2px #fe82ef, 0 0 3px #fe82ef",
  letterSpacing: "0.1rem",
  // textShadow: "0px 1px 5px #fe82ef",

  // place the text at the top of the card
  marginTop: "0",
});

interface QuizCardProps {
  quiz: QuizInfoState["quiz"][number];
}

const QuizCard: React.FC<QuizCardProps> = ({ quiz }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/play-quiz/${quiz.id}`);
  };
  return (
    <StyledCard onClick={handleClick}>
      <CardContent>
        <Title>{quiz.name}</Title>
      </CardContent>
    </StyledCard>
  );
};

export default QuizCard;
