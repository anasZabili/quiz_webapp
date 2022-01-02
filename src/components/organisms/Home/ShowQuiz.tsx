import { CardContent, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router";
import Card from "../../atoms/QuizCard";
import { QuizInfoState } from "../../templates/Home";

const Title = styled("h1")({
  fontSize: "1.3rem",
  color: "grey",
  textAlign: "center",
  letterSpacing: "0.1rem",
  marginTop: "0",
});

interface QuizCardProps {
  quizzes: QuizInfoState["quiz"];
}

const QuizCard: React.FC<QuizCardProps> = ({ quizzes }) => {
  const navigate = useNavigate();

  const handleClick = (quizId: string) => {
    navigate(`/play-quiz/${quizId}`);
  };

  return (
    <Grid container spacing={4}>
      {quizzes.map((value, index) => {
        return (
          <Grid item xs={4} key={value.id}>
            <Card onClick={() => handleClick(value.id)}>
              <Title>{value.name}</Title>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default QuizCard;
