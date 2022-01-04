import {
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import QuizList from "./QuizList";
import useFetchData from "../../../hooks/useFetchData";
import { useEffect } from "react";
import { QuizInfoState } from "../../templates/Home";
import UpdateQuizPanel from "./UpdatePanel";

interface UpdateQuizPageProps {
  quizzes: QuizInfoState["quiz"];
  refetch: () => void;
}

const UpdateQuizPage: React.FC<UpdateQuizPageProps> = ({
  quizzes,
  refetch,
}) => {
  return (
    <>
      <QuizList quizzes={quizzes} refetch={refetch} />
      <UpdateQuizPanel />
    </>
  );
};

export default UpdateQuizPage;
