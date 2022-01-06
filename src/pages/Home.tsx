import useFetchData from "../hooks/useFetchData";
import { default as HomeTemplate } from "../components/templates/Home";
import { customSuccessToast } from "../utils/customToast";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const url = process.env.REACT_APP_API_BASE + "quizzes/publish";
  const { error, isLoading, data } = useFetchData(url);
  return (
    <>
      <HomeTemplate quizzes={data} isLoading={isLoading} />{" "}
    </>
  );
};

export default Home;
