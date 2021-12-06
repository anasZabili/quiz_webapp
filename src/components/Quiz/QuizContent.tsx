import { Grid } from "@mui/material";
import { QuizState } from "./index";
import QuizCard from "./QuizCard";

interface QuizContentProps {
  quiz: QuizState["quiz"];
}

const QuizContent: React.FC<QuizContentProps> = ({ quiz }) => {
  console.log("🚀 ~ file: QuizContent.tsx ~ line 9 ~ quiz", quiz);
  return (
    <Grid container spacing={4}>
      {quiz.map((question, index) => {
        return (
          <Grid item xs={4} key={question.id}>
            <QuizCard question={question} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default QuizContent;
