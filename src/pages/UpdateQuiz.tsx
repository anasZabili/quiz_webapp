import { useEffect } from "react";
import { default as UpdateQuizTemplate } from "../components/templates/UpdateQuiz";
import useFetchData from "../hooks/useFetchData";
import { customErrorToast } from "../utils/customToast";

interface UpdateQuizProps {}

const UpdateQuiz: React.FC<UpdateQuizProps> = () => {
  const url = process.env.REACT_APP_API_BASE + "quizzes/draft";
  const { error, isLoading, data, refetch } = useFetchData(url);

  useEffect(() => {
    if (error) {
      customErrorToast(
        "Erreur",
        "Impossible de charger les broullions des quizzes"
      );
    }
  }, [error]);

  return (
    <UpdateQuizTemplate
      quizzes={data}
      isLoading={isLoading}
      refetch={refetch}
    />
  );
};

export default UpdateQuiz;
