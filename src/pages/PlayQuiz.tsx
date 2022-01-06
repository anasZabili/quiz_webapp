import { CircularProgress } from "@mui/material";
import { useEffect } from "react";
import { useParams } from "react-router";
import Appbar from "../components/organisms/Header";
import QuizPlay from "../components/PlayQuiz";
import useFetchData from "../hooks/useFetchData";
import { customErrorToast } from "../utils/customToast";

interface PlayQuizProps {}

export interface PlayableQuizState {
  id: string;
  name: string;
  status: number;
  questions: {
    id: string;
    quizId: string;
    text: string;
    type: number;
    answers?: {
      id: string;
      text: string;
    }[];
  }[];
  rate: number;
}

const PlayQuiz: React.FC<PlayQuizProps> = () => {
  const { quizId } = useParams();
  const url = process.env.REACT_APP_API_BASE + `quiz/${quizId}`;
  const { error, isLoading, data } = useFetchData(url);

  useEffect(() => {
    if (error) {
      customErrorToast("Erreur", "Impossible de charger le quiz");
    }
  }, [error]);

  return (
    <>
      <Appbar />
      {!isLoading ? <QuizPlay quiz={data} /> : <CircularProgress />}
    </>
  );
};

export default PlayQuiz;
