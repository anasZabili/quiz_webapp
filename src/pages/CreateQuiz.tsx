import Appbar from "../components/Appbar";
import AddQuiz from "../components/AddQuiz";

interface CreateQuizProps {}

const Home: React.FC<CreateQuizProps> = () => {
  return (
    <>
      <Appbar />
      <AddQuiz />
    </>
  );
};

export default Home;
