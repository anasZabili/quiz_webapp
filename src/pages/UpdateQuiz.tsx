import {default as UpdateQuizTemplate} from "../components/templates/UpdateQuiz";
import useFetchData from "../hooks/useFetchData";

interface UpdateQuizProps {}

const UpdateQuiz: React.FC<UpdateQuizProps> = () => {
    const url = process.env.REACT_APP_API_BASE + "quizzes/draft";
    const { error, isLoading, data, refetch } = useFetchData(url);

    
    return <UpdateQuizTemplate quizzes={data} isLoading={isLoading} refetch={refetch} />;
};

export default UpdateQuiz;
