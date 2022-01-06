import useFetchData from "../hooks/useFetchData";
import { default as HomeTemplate } from "../components/templates/Home";
import { customErrorToast } from "../utils/customToast";
import { useEffect } from "react";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const url = process.env.REACT_APP_API_BASE + "quizzes/publish";
  const { error, isLoading, data } = useFetchData(url);

  useEffect(() => {
    if (error) {
      customErrorToast("Erreur", "Impossible de charger les quizzes publiés");
    }
  }, [error]);

  return (
    <>
      <HomeTemplate quizzes={data} isLoading={isLoading} />
    </>
  );
};

export default Home;
