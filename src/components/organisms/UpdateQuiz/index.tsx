import {
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import QuizList from "./QuizList";
import useFetchData from "../../../hooks/useFetchData";
import { useEffect, useState } from "react";
import { QuizInfoState } from "../../templates/Home";
import UpdateQuizPanel from "./UpdatePanel";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";
import Grid from "@mui/material/Grid";
import DialogPassword from "./DialogPassword";
import usePost from "../../../hooks/usePost";
import { customErrorToast } from "../../../utils/customToast";

interface UpdateQuizPageProps {
  quizzes: QuizInfoState["quiz"];
  refetch: () => void;
}

export interface UpdateQuizState {
  id: string;
  name: string;
  questions: {
    id: string;
    text: string;
    type: number;
    answers: {
      text: string;
      isCorrect: boolean;
      id: string;
    }[];
  }[];
}

const UpdateQuizPage: React.FC<UpdateQuizPageProps> = ({
  quizzes,
  refetch,
}) => {
  const [selectedQuiz, setSelectedQuiz] = useState<
    QuizInfoState["quiz"][0] | null
  >();
  const [open, setOpen] = useState(false);

  const { axiosPost, response, isLoading, error, clearField } = usePost();

  const handleOnClick = (quiz: QuizInfoState["quiz"][0]) => {
    setSelectedQuiz(quiz);
    setOpen(true);
  };

  const refetchAfterAction = () => {
    refetch();
    clearField();
  };

  useEffect(() => {
    if (error) {
      customErrorToast(
        "Erreur",
        "Une erreur est survenue lors de la mise à jour du quiz"
      );
    }
  }, [error]);

  const handleValidatePassword = (value: string) => {
    if (selectedQuiz?.id) {
      const url =
        process.env.REACT_APP_API_BASE +
        "quiz/" +
        selectedQuiz?.id +
        "/checkAccess";
      axiosPost(url, { password: value }).then((res) => {
        setOpen(false);
      });
    }
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Typography variant="h5" color="primary" sx={{ pb: 1 }}>
            Quiz Brouillon
          </Typography>
          <QuizList
            quizzes={quizzes}
            refetch={refetch}
            onClick={handleOnClick}
            disabled={response ? true : false}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <UpdateQuizPanel quiz={response} refetch={refetchAfterAction} />
        </Grid>
      </Grid>
      <DialogPassword
        open={open}
        setOpen={setOpen}
        onSubmit={handleValidatePassword}
      />
    </>
  );
};

export default UpdateQuizPage;
