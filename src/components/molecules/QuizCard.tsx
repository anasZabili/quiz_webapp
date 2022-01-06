import {
  Card as MuiCard,
  CardActions,
  CardContent,
  Grid,
  Rating,
} from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { styled } from "@mui/system";
import { useState } from "react";
import { IconButton } from "@mui/material";
import { default as QuizScoreDialog } from "../organisms/QuizScore";

interface CardProps {
  children: React.ReactNode;
  onClick: () => void;
  quiz: any;
}

const StyledCard = styled(MuiCard)({
  borderRadius: "1rem",
  boxShadow: "0px 0px 10px 0px #535353",
  background: "url(/quiz_card_logo.jpg)",
  backgroundPosition: "center",
  backgroundSize: "cover",
  paddingTop: 0,
  cursor: "pointer",
});

const QuizCard: React.FC<CardProps> = ({ children, onClick, quiz }) => {
  const [accessScores, setAccessScores] = useState(false);

  return (
    <>
      <StyledCard>
        <CardContent sx={{ height: "55vh" }} onClick={onClick}>
          {children}
        </CardContent>
        <Grid container direction="row" alignItems="center">
          <IconButton
            onClick={() => {
              setAccessScores(true);
            }}
          >
            <EmojiEventsIcon fontSize="large" sx={{ color: "#F4D03F" }} />
          </IconButton>
          <Rating name="read-only" value={quiz.rate} readOnly />
        </Grid>
      </StyledCard>
      <QuizScoreDialog
        open={accessScores}
        setOpen={setAccessScores}
        quiId={quiz.id}
      />
    </>
  );
};

export default QuizCard;
