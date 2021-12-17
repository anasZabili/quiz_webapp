import { useEffect, useState } from "react";
import { Box, styled } from "@mui/system";
import { PlayableQuizState } from "../../pages/PlayQuiz";
import Question from "./Question";
import { Button } from "@mui/material";

const Container = styled(Box)({
  height: "85vh",
});

const QuestionContainer = styled(Box)({
  margin: "2rem",
  // height: "100%",
  display: "flex",
  justifyContent: "center",
});

const Title = styled("h1")({
  padding: 0,
  margin: "1rem",
  fontSize: "2rem",
  color: "Gray",
  textAlign: "center",
  letterSpacing: "0.2rem",
  // textShadow: "0.02em 0.02em 2px gray",
  fontFamily: "Bebas Neue",
});

interface QuizPlayProps {
  quiz: PlayableQuizState;
}

const QuizPlay: React.FC<QuizPlayProps> = ({ quiz }) => {
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [isTheLastQuestion, setIsTheLastQuestion] = useState(false);

  useEffect(() => {
    if (currentQuestionNumber === quiz.questions.length - 1) {
      setIsTheLastQuestion(true);
    }
  }, [currentQuestionNumber]);

  const nextQuestion = () => {
    setCurrentQuestionNumber(currentQuestionNumber + 1);
  };

  const finishQuiz = () => {
    alert("Quiz finished");
  };

  return (
    <Container>
      <Title>{quiz.name}</Title>
      <QuestionContainer>
        <Question
          question={quiz.questions[currentQuestionNumber]}
          nextQuestion={nextQuestion}
          isTheLastQuestion={isTheLastQuestion}
          finishQuiz={finishQuiz}
        />
      </QuestionContainer>
    </Container>
  );
};

export default QuizPlay;
