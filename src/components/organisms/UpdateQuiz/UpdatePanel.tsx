import {
  Button,
  Card as MuiCard,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { UpdateQuizState } from ".";
import usePut from "../../../hooks/usePut";
import CreateQuizStepper, {
  CreatedQuizState,
} from "../CreateQuiz/CreateQuizStepper";
import DeleteIcon from "@mui/icons-material/Delete";
import PublishIcon from "@mui/icons-material/Publish";
import useDelete from "../../../hooks/useDelete";
import usePost from "../../../hooks/usePost";

interface UpdateQuizPanelProps {
  quiz: UpdateQuizState;
  refetch: () => void;
}

const StyledCard = styled(MuiCard)({
  minHeight: "60vh",
  borderRadius: "1rem",
  boxShadow: "0px 0px 10px 0px #535353",
  backgroundColor: "#42424216",
  height: "100%",
});

const UpdateQuizPanel: React.FC<UpdateQuizPanelProps> = ({ quiz, refetch }) => {
  const { axiosPut, response, isLoading, error } = usePut();
  const navigate = useNavigate();

  const {
    axiosDelete,
    response: deleteResponse,
    isLoading: deleteIsLoading,
    error: deleteError,
  } = useDelete();
  const {
    axiosPost,
    response: postResponse,
    isLoading: postIsLoading,
    error: postError,
  } = usePost();

  const onSubmit = (values: CreatedQuizState) => {
    console.log(
      "🚀 ~ file: UpdatePanel.tsx ~ line 24 ~ onSubmit ~ values",
      values
    );
    const url = process.env.REACT_APP_API_BASE + "quiz/" + quiz.id;
    axiosPut(url, values).then((res) => {
      refetch();
    });
  };

  const handleOnDelete = (id: string) => {
    const url = process.env.REACT_APP_API_BASE + "quiz/" + id;
    axiosDelete(url).then(() => {
      refetch();
    });
  };

  const handleOnPublish = (id: string) => {
    const url = process.env.REACT_APP_API_BASE + "quiz/" + id + "/publish";
    axiosPost(url, {}).then(() => {
      refetch();
    });
  };

  return (
    <StyledCard>
      <CardContent sx={{ height: "100%" }}>
        {quiz ? (
          <Grid
            container
            spacing={12}
            direction="column"
            justifyContent="space-between"
            alignItems="center"
            sx={{ height: "100%" }}
            wrap="nowrap"
          >
            <Grid
              container
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
              item
              xs={12}
              md={4}
            >
              <Grid container xs={6} md={6} justifyContent="flex-end">
                <Button
                  variant="outlined"
                  endIcon={<PublishIcon />}
                  onClick={() => handleOnPublish(quiz.id)}
                  sx={{ mr: 3, borderRadius: "1rem" }}
                >
                  Publier
                </Button>
              </Grid>
              <Grid container xs={6} md={6}>
                <Button
                  variant="outlined"
                  endIcon={<DeleteIcon />}
                  onClick={() => handleOnDelete(quiz.id)}
                  sx={{ borderRadius: "1rem" }}
                >
                  Supprimer
                </Button>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <CreateQuizStepper handleCreate={onSubmit} defaultValues={quiz} />
              <Divider variant="middle" />
            </Grid>
          </Grid>
        ) : (
          <Typography color="primary">Aucun quiz </Typography>
        )}
      </CardContent>
    </StyledCard>
  );
};

export default UpdateQuizPanel;
