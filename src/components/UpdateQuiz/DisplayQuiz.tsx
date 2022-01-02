import { useState } from "react";
import { styled } from "@mui/system";
import { Box } from "@mui/system";

const Container = styled(Box)({
  backgroundColor: "#42424216",
  borderRadius: "5px",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
  width: "100%",
  margin: "0 10px",
  minHeight: "70vh",
});

interface QuizState {
  id: string;
  name: string;
  questions: {
    id: string;
    question: string;
  }[];
}

interface DisplayQuizProps {
  quizId: string | null;
}

const DisplayQuiz: React.FC<DisplayQuizProps> = ({ quizId }) => {
  // todo fetch the quiz
  const [Quiz, setQuiz] = useState<QuizState>({
    id: "1",
    name: "Quiz 1",
    questions: [
      {
        id: "1",
        question: "What is the capital of France?",
      },
      {
        id: "2",
        question: "What is the capital of France?",
      },
      {
        id: "3",
        question: "What is the capital of France?",
      },
    ],
  });

  return <Container></Container>;
};

export default DisplayQuiz;
