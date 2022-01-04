import { useState } from "react";
import QuizList from "./QuizList";
import { styled } from "@mui/system";
import { Box } from "@mui/system";
import DisplayQuiz from "./DisplayQuiz";
import { QuizInfoState } from "../templates/Home";

const Container = styled(Box)({
  display: "flex",
  flexDirection: "row",
});

interface AddQuizProps {}

const AddQuiz: React.FC<AddQuizProps> = () => {
  const [selectedQuizId, setSelectedQuizId] = useState<string | null>("1");

  const [quiz, setQuiz] = useState<QuizInfoState["quiz"]>([
    { id: "45", name: "Animals dans la jungle" },
    { id: "47", name: "History" },
    { id: "48", name: "History" },
    { id: "49", name: "History" },
    { id: "50", name: "History" },
    { id: "51", name: "History" },
  ]);
  return (
    <Container>
      <QuizList quiz={quiz} />
      <DisplayQuiz quizId={selectedQuizId} />
    </Container>
  );
};

export default AddQuiz;
