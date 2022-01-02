import Header from "../organisms/Header";
import { Box, styled } from "@mui/system";
import CreateQuizForm from "../organisms/CreateQuiz/CreateQuizForm";

interface UpdateQuizProps {}

const Container = styled(Box)({
  width: "80%",
  maxWidth: "1500px",
  margin: "2em auto",
});

const UpdateQuiz: React.FC<UpdateQuizProps> = () => {
  return (
    <>
      <Header />
      <Container>{<CreateQuizForm />}</Container>
    </>
  );
};

export default UpdateQuiz;
