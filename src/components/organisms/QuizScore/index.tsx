import {
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import useFetchData from "../../../hooks/useFetchData";
import StarsIcon from "@mui/icons-material/Stars";
import Button from "../../atoms/Button";

interface QuizScoreProps {
  open: boolean;
  setOpen: (state: boolean) => void;
  quiId: string;
}

interface ScoreState {
  id: string;
  quizId: string;
  score: number;
  userName: string;
}

const StyledDialog = styled(Dialog)({
  "& .MuiPaper-root": {
    backgroundColor: "#1A1A1A",
    borderRadius: "1rem",
    width: "40vh",
    padding: "1.5em",
  },
});

const StyledList = styled(List)({
  width: "100%",
  maxWidth: 360,
  color: "#eef3f8",
  "& .MuiListItemText-secondary": {
    color: "#eef3f8",
  },
});

const QuizScore: React.FC<QuizScoreProps> = ({ open, setOpen, quiId }) => {
  const url = process.env.REACT_APP_API_BASE + "scores/" + quiId;
  const { error, isLoading, data } = useFetchData(url);

  const handleClose = () => {
    setOpen(false);
  };

  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <StyledDialog open={open} onClose={handleClose}>
      <Grid container spacing={3} direction="column">
        <DialogTitle color="primary" sx={{ fontWeight: "bold" }}>
          Hall of Fame
        </DialogTitle>
        <DialogContent>
          {isLoading ? (
            <CircularProgress />
          ) : data.length > 0 ? (
            <StyledList>
              {data.map((element: ScoreState, index: number) => {
                return (
                  <ListItem>
                    <Grid
                      container
                      direction="row"
                      spacing={2}
                      justifyContent="center"
                      alignItems="center"
                    >
                      {index == 0 ? (
                        <StarsIcon
                          fontSize="medium"
                          sx={{ color: "#F4D03F", mr: 2 }}
                        />
                      ) : (
                        <StarsIcon
                          fontSize="medium"
                          sx={{ color: "#1A1A1A", mr: 2 }}
                        />
                      )}
                      <ListItemText
                        primary={
                          element.score > 1
                            ? capitalizeFirstLetter(element.userName) +
                              " a eu " +
                              element.score +
                              " Netcoins"
                            : capitalizeFirstLetter(element.userName) +
                              " a eu " +
                              element.score +
                              " Netcoin"
                        }
                      />
                    </Grid>
                  </ListItem>
                );
              })}
            </StyledList>
          ) : (
            <Typography variant="h6" color="primary">
              Aucun score
            </Typography>
          )}
        </DialogContent>
      </Grid>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Retour
        </Button>
      </DialogActions>
    </StyledDialog>
  );
};

export default QuizScore;
