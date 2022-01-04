import { CardContent, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router";
import { QuizInfoState } from ".";
import Card from "../molecules/QuizCard";

const Title = styled("h1")({
  fontSize: "1.3rem",
  color: "grey",
  textAlign: "center",
  letterSpacing: "0.1rem",
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
    <Card onClick={handleClick}>
      <Title>{quiz.name}</Title>
    </Card>
  );
};

export default QuizCard;
