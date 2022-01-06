import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router";
import Card from "../../molecules/QuizCard";
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
      {/* return not found id the quizzes is empty */}
      {quizzes.length === 0 ? (
        <Grid item xs={12}>
          <Typography align="center" variant="h5" color="primary">
            Aucun quiz publié
          </Typography>
        </Grid>
      ) : (
        quizzes.map((value, index) => {
          return (
            <Grid item xs={12} md={6} lg={4} key={value.id}>
              <Card onClick={() => handleClick(value.id)} quiz={value}>
                <Title>{value.name.toUpperCase()}</Title>
              </Card>
            </Grid>
          );
        })
      )}
    </Grid>
  );
};

export default QuizCard;
