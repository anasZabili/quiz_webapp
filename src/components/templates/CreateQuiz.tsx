import Header from "../organisms/Header";
import { Box, styled } from "@mui/system";
import CreateQuizStepper, {
  CreatedQuizState,
} from "../organisms/CreateQuiz/CreateQuizStepper";
import usePost from "../../hooks/usePost";
import { useNavigate } from "react-router-dom";

interface CreateQuizProps {}

const Container = styled(Box)({
  width: "80%",
  maxWidth: "1500px",
  margin: "2em auto",
});

const CreateQuiz: React.FC<CreateQuizProps> = () => {
  const { axiosPost, response, isLoading, error } = usePost();
  const navigate = useNavigate();

  const onSubmit = (values: CreatedQuizState) => {
    const url = process.env.REACT_APP_API_BASE + "quiz";
    axiosPost(url, values).then((res) => {
      navigate("/");
    });
  };
  return (
    <>
      <Header />
      <Container>{<CreateQuizStepper handleCreate={onSubmit} />}</Container>
    </>
  );
};

export default CreateQuiz;
