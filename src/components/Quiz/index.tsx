import { Box, styled } from "@mui/system";
import { useState } from "react";
import QuizContent from "./QuizContent";

const Container = styled(Box)({
  width: "80%",
  maxWidth: "1500px",
  margin: "2em auto",
});

interface QuizProps {
  quizzes: { id: string; name: string }[];
}

export interface QuizInfoState {
  quiz: { id: string; name: string }[];
}

const Quiz: React.FC<QuizProps> = ({ quizzes }) => {
  // const [quiz, setQuiz] = useState<QuizInfoState["quiz"]>([
  //   { id: "45", name: "Animals dans la jungle" },
  //   { id: "47", name: "History" },
  //   { id: "48", name: "History" },
  //   { id: "49", name: "History" },
  //   { id: "50", name: "History" },
  //   { id: "51", name: "History" },
  // ]);

  return (
    <Container>
      <QuizContent quiz={quizzes} />
    </Container>
  );
};

export default Quiz;
