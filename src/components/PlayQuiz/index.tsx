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
  fontFamily: "Bebas Neue",
});

interface QuizPlayProps {
  quiz: PlayableQuizState;
}

const QuizPlay: React.FC<QuizPlayProps> = ({ quiz }) => {
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  console.log("🚀 ~ file: index.tsx ~ line 36 ~ currentScore", currentScore);
  const [isTheLastQuestion, setIsTheLastQuestion] = useState(false);

  useEffect(() => {
    if (currentQuestionNumber === quiz.questions.length - 1) {
      setIsTheLastQuestion(true);
    }
  }, [currentQuestionNumber]);

  const nextQuestion = (isCorrect: boolean) => {
    if (isCorrect) {
      setCurrentScore((prevScore) => prevScore + 1);
    }
    setCurrentQuestionNumber(currentQuestionNumber + 1);
  };

  const finishQuiz = (isCorrect: boolean) => {
    if (isCorrect) {
      setCurrentScore((prevScore) => prevScore + 1);
    }
    alert(`Quiz terminé avec un score de ${currentScore}`);
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
          setCurrentScore={setCurrentScore}
        />
      </QuestionContainer>
    </Container>
  );
};

export default QuizPlay;
