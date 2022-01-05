import { QuizInfoState } from "../../Quiz";
import { List, ListItem, Typography } from "@mui/material";
import { Box, flexbox, styled } from "@mui/system";
import usePost from "../../../hooks/usePost";
import useDelete from "../../../hooks/useDelete";
import IconButton from "../../atoms/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

interface QuizListProps {
  quizzes: QuizInfoState["quiz"];
  refetch: () => void;
  onClick: (quiz: QuizInfoState["quiz"][0]) => void;
}

const StyledList = styled(List)({
  backgroundColor: "#42424216",
  borderRadius: "1rem",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
  width: "100%",
});

const StyledListItem = styled(ListItem)({
  color: "gray",
  fontSize: "1.2rem",
  overflow: "hidden",
  fontWeight: "bold",
  textAlign: "center",
  padding: "0.9rem",
  display: "flex",
  justifyContent: "space-between",
  cursor: "pointer",
});

const QuizList: React.FC<QuizListProps> = ({ quizzes, refetch, onClick }) => {
  const { axiosDelete, response, isLoading, error } = useDelete();

  const handleOnDelete = (id: string) => {
    const url = process.env.REACT_APP_API_BASE + "quiz/delete/" + id;
    axiosDelete(url).then(() => {
      refetch();
    });
  };

  return (
    <StyledList>
      {quizzes.length > 0 ? (
        quizzes.map((quiz, value) => {
          return (
            <StyledListItem key={quiz.id} onClick={() => onClick(quiz)}>
              {quiz.name}
              <IconButton
                onClick={() => handleOnDelete(quiz.id)}
                Icon={DeleteIcon}
              ></IconButton>
            </StyledListItem>
          );
        })
      ) : (
        <StyledListItem>
          <Typography color="primary">Aucun quiz</Typography>
        </StyledListItem>
      )}
    </StyledList>
  );
};

export default QuizList;
