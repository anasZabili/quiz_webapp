import { List, ListItem, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { QuizInfoState } from "../../templates/Home";
interface QuizListProps {
  quizzes: QuizInfoState["quiz"];
  refetch: () => void;
  onClick: (quiz: QuizInfoState["quiz"][0]) => void;
  disabled: boolean;
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

const QuizList: React.FC<QuizListProps> = ({
  quizzes,
  refetch,
  onClick,
  disabled,
}) => {
  return (
    <StyledList>
      {quizzes.length > 0 ? (
        quizzes.map((quiz, value) => {
          return (
            <StyledListItem
              key={quiz.id}
              onClick={disabled ? () => {} : () => onClick(quiz)}
            >
              {quiz.name}
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
