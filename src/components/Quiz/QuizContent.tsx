import { Grid } from "@mui/material";
import { QuizInfoState } from "./index";
import QuizCard from "./QuizCard";

interface QuizContentProps {
  quiz: QuizInfoState["quiz"];
}

const QuizContent: React.FC<QuizContentProps> = ({ quiz }) => {
  return (
    <Grid container spacing={4}>
      {quiz.map((value, index) => {
        return (
          <Grid item xs={4} key={value.id}>
            <QuizCard quiz={value} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default QuizContent;
