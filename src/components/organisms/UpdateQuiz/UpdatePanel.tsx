import { Card as MuiCard, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { UpdateQuizState } from ".";

interface UpdateQuizPanelProps {
  quiz: UpdateQuizState;
}

const StyledCard = styled(MuiCard)({
  minHeight: "60vh",
  borderRadius: "1rem",
  boxShadow: "0px 0px 10px 0px #535353",
  backgroundColor: "#42424216",
});

const UpdateQuizPanel: React.FC<UpdateQuizPanelProps> = ({ quiz }) => {
  return (
    <StyledCard>
      <CardContent>
        {quiz ? (
          <Typography color="primary">On a un quiz</Typography>
        ) : (
          <Typography color="primary">Aucun quiz </Typography>
        )}
      </CardContent>
    </StyledCard>
  );
};

export default UpdateQuizPanel;