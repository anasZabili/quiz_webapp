import Appbar from "../components/Appbar";
import Quiz from "../components/Quiz";

interface CreateQuizProps {}

const Home: React.FC<CreateQuizProps> = () => {
  return (
    <>
      <Appbar />
      <Quiz />
    </>
  );
};

export default Home;
