import Header from "../organisms/Header";
import { Box, styled } from "@mui/system";
import UpdateQuizPage from "../organisms/UpdateQuiz/index";
import { QuizInfoState } from "./Home";
import { CircularProgress } from "@mui/material";

interface UpdateQuizProps {
  isLoading: boolean;
  quizzes: QuizInfoState["quiz"];
  refetch: () => void;
}

const Container = styled(Box)({
  width: "80%",
  maxWidth: "1500px",
  margin: "2em auto",
});

const UpdateQuiz: React.FC<UpdateQuizProps> = ({
  isLoading = false,
  quizzes,
  refetch,
}) => {
  return (
    <>
      <Header />
      <Container>
        {!isLoading ? (
          <UpdateQuizPage quizzes={quizzes} refetch={refetch} />
        ) : (
          <CircularProgress />
        )}
      </Container>
    </>
  );
};

export default UpdateQuiz;
