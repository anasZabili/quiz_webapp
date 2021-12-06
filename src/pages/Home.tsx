import Appbar from "../components/Appbar";
import Quiz from "../components/Quiz";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <Appbar />
      <Quiz />
    </>
  );
};

export default Home;
