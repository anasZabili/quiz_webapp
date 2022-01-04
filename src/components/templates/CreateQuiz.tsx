import Header from "../organisms/Header";
import { Box, styled } from "@mui/system";
import CreateQuizForm from "../organisms/CreateQuiz/CreateQuizForm";
import CreateQuizStepper from "../organisms/CreateQuiz/CreateQuizStepper";

interface CreateQuizProps {}

const Container = styled(Box)({
  width: "80%",
  maxWidth: "1500px",
  margin: "2em auto",
});

const CreateQuiz: React.FC<CreateQuizProps> = () => {
  return (
    <>
      <Header />
      <Container>{<CreateQuizStepper />}</Container>
    </>
  );
};

export default CreateQuiz;
