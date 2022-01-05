import { Card as MuiCard, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { UpdateQuizState } from ".";
import usePut from "../../../hooks/usePut";
import CreateQuizStepper, {
  CreatedQuizState,
} from "../CreateQuiz/CreateQuizStepper";

interface UpdateQuizPanelProps {
  quiz: UpdateQuizState;
}

const StyledCard = styled(MuiCard)({
  minHeight: "60vh",
  borderRadius: "1rem",
  boxShadow: "0px 0px 10px 0px #535353",
  backgroundColor: "#42424216",
});

const UpdateQuizPanel: React.FC<UpdateQuizPanelProps> = ({ quiz }) => {
  const { axiosPut, response, isLoading, error } = usePut();
  const navigate = useNavigate();

  const onSubmit = (values: CreatedQuizState) => {
    console.log(
      "🚀 ~ file: UpdatePanel.tsx ~ line 24 ~ onSubmit ~ values",
      values
    );
    const url = process.env.REACT_APP_API_BASE + "quiz/" + quiz.id;
    axiosPut(url, values).then((res) => {
      navigate("/");
    });
  };

  return (
    <StyledCard>
      <CardContent>
        {quiz ? (
          <CreateQuizStepper handleCreate={onSubmit} defaultValues={quiz} />
        ) : (
          <Typography color="primary">Aucun quiz </Typography>
        )}
      </CardContent>
    </StyledCard>
  );
};

export default UpdateQuizPanel;
