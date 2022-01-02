import { QuizInfoState } from "../Quiz";
import { List, ListItem } from "@mui/material";
import { styled } from "@mui/system";

interface QuizListProps {
  quiz: QuizInfoState["quiz"];
}

const StyledList = styled(List)({
  backgroundColor: "#42424216",
  borderRadius: "5px",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
  width: "20%",
});

const StyledListItem = styled(ListItem)({
  color: "gray",
  fontSize: "1.2rem",
  overflow: "hidden",
  fontWeight: "bold",
  textAlign: "center",
  padding: "0.9rem",
});

const QuizList: React.FC<QuizListProps> = ({ quiz }) => {
  return (
    <StyledList>
      {quiz.map((question, value) => {
        return (
          <StyledListItem key={question.id}>{question.name}</StyledListItem>
        );
      })}
    </StyledList>
  )
};

export default QuizList;
