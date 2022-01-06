import Header from "../organisms/Header";
import ShowQuiz from "../organisms/Home/ShowQuiz";
import { Box, styled } from "@mui/system";
import { CircularProgress } from "@mui/material";

interface HomeProps {
  isLoading: boolean;
  quizzes: QuizInfoState["quiz"];
}

export interface QuizInfoState {
  quiz: { id: string; name: string }[];
}

const Container = styled(Box)({
  width: "80%",
  maxWidth: "1500px",
  margin: "2em auto",
});

const Home: React.FC<HomeProps> = ({ isLoading = false, quizzes }) => {
  return (
    <>
      <Header />
      <Container>
        {!isLoading ? <ShowQuiz quizzes={quizzes} /> : <CircularProgress />}
      </Container>
    </>
  );
};

export default Home;
