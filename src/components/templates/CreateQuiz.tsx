import Header from "../organisms/Header";
import { Box, styled } from "@mui/system";
import CreateQuizStepper, {
  CreatedQuizState,
} from "../organisms/CreateQuiz/CreateQuizStepper";
import usePost from "../../hooks/usePost";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { customErrorToast, customSuccessToast } from "../../utils/customToast";

interface CreateQuizProps {}

const Container = styled(Box)({
  width: "85%",
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

  useEffect(() => {
    if (error) {
      customErrorToast(
        "Erreur",
        "Une erreur est survenue lors de la création du quiz"
      );
    }
    if (response) {
      customSuccessToast("Succès", "Le quiz a été créé en brouillon");
    }
  }, [error, response]);

  return (
    <>
      <Header />
      <Container>{<CreateQuizStepper handleCreate={onSubmit} />}</Container>
    </>
  );
};

export default CreateQuiz;
