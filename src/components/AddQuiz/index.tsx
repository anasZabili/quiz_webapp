import { Box, styled } from "@mui/system";
import { useState } from "react";

const Container = styled(Box)({
  width: "80%",
  maxWidth: "1500px",
  margin: "2em auto",
});

interface CreateQuizProps {}

export interface QuizState {
  quiz: { id: string; name: string }[];
}

const CreateQuiz: React.FC<CreateQuizProps> = () => {
  const [quiz, setQuiz] = useState<QuizState["quiz"]>([
    { id: "45", name: "Animals dans la jungle" },
    { id: "47", name: "History" },
    { id: "48", name: "History" },
    { id: "49", name: "History" },
    { id: "50", name: "History" },
    { id: "51", name: "History" },
  ]);

  return <h1>hello world</h1>;
};

export default CreateQuiz;
