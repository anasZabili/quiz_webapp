import { useState } from "react";
import { useParams } from "react-router";
import Appbar from "../components/Appbar";
import QuizPlay from "../components/PlayQuiz";
import useFetchData from "../hooks/useFetchData";

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
  console.log(quizId);
  // fetch quiz with id

  const url = process.env.REACT_APP_API_BASE + `quiz/${quizId}`;
  const { error, isLoading, data } = useFetchData(url);

  return (
    <>
      <Appbar />
      {!isLoading && <QuizPlay quiz={data} />}
    </>
  );
};

export default PlayQuiz;
