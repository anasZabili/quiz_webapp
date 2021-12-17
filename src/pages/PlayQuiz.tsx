import { useState } from "react";
import { useParams } from "react-router";
import Appbar from "../components/Appbar";
import QuizPlay from "../components/PlayQuiz";

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

  const [quiz, setQuiz] = useState<PlayableQuizState>({
    id: "aad9cdf5-e68e-4f15-1b3d-08d9be4c151f",
    name: "Quiz1",
    status: 0,
    questions: [
      {
        id: "7de3f7a2-d3a0-4db1-c69d-08d9be4c1529",
        text: "Capitale de France ?",
        answers: [
          {
            id: "8c55427d-f438-4171-6c59-08d9be4c152d",
            text: "Paris",
          },
          {
            id: "014fcb57-7450-4302-6c5a-08d9be4c152d",
            text: "Rouen",
          },
          {
            id: "19fa07ae-e214-411f-6c5b-08d9be4c152d",
            text: "Marseille",
          },
          {
            id: "b93a63b9-60a8-40ea-6c5c-08d9be4c152d",
            text: "Mulouse",
          },
        ],
        type: 2,
        quizId: "aad9cdf5-e68e-4f15-1b3d-08d9be4c151f",
      },
      {
        id: "1e08da9e-d9ab-4789-c69e-08d9be4c1529",
        text: "Anas dépanne ?",
        answers: [
          {
            id: "fd3e9c75-f38e-460a-6c5d-08d9be4c152d",
            text: "Vrai",
          },
          {
            id: "3f30c887-4896-4d42-6c5e-08d9be4c152d",
            text: "Faux",
          },
        ],
        type: 0,
        quizId: "aad9cdf5-e68e-4f15-1b3d-08d9be4c151f",
      },
      {
        id: "1e08da9e-d9ab-4789-c69e-0829",
        text: "capital du gabon",
        type: 3,
        quizId: "aad9cdf5-e68e-4f15-1b3d-08d9be4c151f",
      },
    ],
    rate: 0,
  });

  return (
    <>
      <Appbar />
      <QuizPlay quiz={quiz} />
    </>
  );
};

export default PlayQuiz;
