import { Box, Button, Card, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { PlayableQuizState } from "../../pages/PlayQuiz";
import MultipleChoiceAnswer from "./MultipleChoiceAnswer";
import TextAnswer from "./TextAnswer";
import TFAnswer from "./TFAnswer";

const StyledCard = styled(Card)({
  color: "gray",
  padding: "1rem",
  backgroundColor: "#635d5d63",
  minHeight: "30px",
  borderRadius: "5px",
  minWidth: "60%",
  // minWidth: "220px",
});

const Title = styled(Typography)({
  color: "#998c8c",
  textAlign: "center",
  fontSize: "2rem",
  fontWeight: "bold",
});

interface QuestionProps {
  question: PlayableQuizState["questions"][number];
  finishQuiz: (isCorrect: boolean) => void;
  isTheLastQuestion: boolean;
  nextQuestion: (isCorrect: boolean) => void;
  setCurrentScore: React.Dispatch<React.SetStateAction<number>>;
}

export interface IAnswers {
  answers: PlayableQuizState["questions"][number]["answers"];
}

const Question: React.FC<QuestionProps> = ({
  question,
  nextQuestion,
  isTheLastQuestion,
  setCurrentScore,
  finishQuiz,
}) => {
  const ComputedAnswerComponent = (): React.ReactElement => {
    switch (question.type) {
      case 0:
        return (
          <MultipleChoiceAnswer
            isSingleChoice={false}
            finishQuiz={finishQuiz}
            isTheLastQuestion={isTheLastQuestion}
            nextQuestion={nextQuestion}
            answers={question.answers}
            questionId={question.id}
          />
        );
      case 1:
        return (
          <MultipleChoiceAnswer
            isSingleChoice={true}
            finishQuiz={finishQuiz}
            isTheLastQuestion={isTheLastQuestion}
            nextQuestion={nextQuestion}
            answers={question.answers}
            questionId={question.id}
          />
        );

      case 2:
        return (
          <TextAnswer
            finishQuiz={finishQuiz}
            isTheLastQuestion={isTheLastQuestion}
            nextQuestion={nextQuestion}
            questionId={question.id}
          />
        );

      default:
        return <Typography color="primary">Erreur rencontr??</Typography>;
    }
  };

  const computedTitle = (): string => {
    switch (question.type) {
      case 0:
        return "Plusieur r??ponse possible";
      case 1:
        return "Une seule r??ponse possible";
      case 2:
        return "R??ponse libre";
      default:
        return "Erreur rencontr??";
    }
  };
  return (
    <StyledCard>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item xs={12}>
          <Title variant="h4">{question.text} ?</Title>
        </Grid>
        <Grid item xs={12}>
          <Typography>{computedTitle()}</Typography>
        </Grid>
        <Grid item xs={12}>
          <ComputedAnswerComponent />
        </Grid>
      </Grid>
    </StyledCard>
  );
};

export default Question;
