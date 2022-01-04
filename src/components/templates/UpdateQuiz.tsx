import Header from "../organisms/Header";
import { Box, styled } from "@mui/system";
import UpdateQuizPage from "../organisms/UpdateQuiz/index"

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
      <Container>{<UpdateQuizPage />}</Container>
    </>
  );
};

export default UpdateQuiz;
