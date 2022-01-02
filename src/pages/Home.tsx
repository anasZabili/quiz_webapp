import Appbar from "../components/Appbar";
import Quiz from "../components/Quiz";
import useFetchData from "../hooks/useFetchData";
import { default as HomeTemplate } from "../components/templates/Home";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const url = process.env.REACT_APP_API_BASE + "quizzes";
  const { error, isLoading, data } = useFetchData(url);
  console.log("🚀 ~ file: Home.tsx ~ line 9 ~ axiosGet", data);
  return <HomeTemplate quizzes={data} isLoading={isLoading} />;
};

export default Home;
