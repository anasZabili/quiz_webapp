import Appbar from "../components/Appbar";
import Quiz from "../components/Quiz";
import useFetchData from "../hooks/useFetchData";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const { error, isLoading, data } = useFetchData(
    " https://localhost:5001/quizzes"
  );
  console.log("🚀 ~ file: Home.tsx ~ line 9 ~ axiosGet", data);
  return (
    <>
      <Appbar />
      {!isLoading && <Quiz quizzes={data} />}
    </>
  );
};

export default Home;
