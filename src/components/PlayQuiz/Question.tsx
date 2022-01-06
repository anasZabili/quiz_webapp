import { Box, Button, Card, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { PlayableQuizState } from "../../pages/PlayQuiz";
import MultipleChoiceAnswer from "./MultipleChoiceAnswer";
import TextAnswer from "./TextAnswer";
import TFAnswer from "./TFAnswer";

const StyledCard = styled(Card)({
  color: "gray",
  padding: "4rem",
  backgroundColor: "#635d5d63",
  width: "60%",
  minHeight: "400px",
  borderRadius: "5px",
  boxShadow: "0px 0px 15px rgba(238, 10, 10, 0.5)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

const Title = styled(Typography)({
  color: "#918a8a",
  textAlign: "center",
  fontSize: "2rem",
  fontWeight: "bold",
});
const StyledButton = styled("h1")({
  color: "#918a8a",
  textAlign: "center",
  fontSize: "2rem",
  fontWeight: "bold",
});

const AnswerContainer = styled(Box)({
  margin: "1rem",
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
        return (
          <TextAnswer
            finishQuiz={finishQuiz}
            isTheLastQuestion={isTheLastQuestion}
            nextQuestion={nextQuestion}
            questionId={question.id}
          />
        );
    }
  };
  return (
    <StyledCard>
      <Grid
        container
        justifyContent="center"
        direction="column"
        alignItems="center"
        rowSpacing={2}
      >
        <Grid item xs={12}>
          <Title variant="h3">{question.text}</Title>
        </Grid>
        <Grid item xs={12}>
          <ComputedAnswerComponent />
        </Grid>
      </Grid>
    </StyledCard>
  );
};

export default Question;
