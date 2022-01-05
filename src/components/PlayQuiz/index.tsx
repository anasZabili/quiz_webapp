import { useEffect, useState } from "react";
import { Box, styled } from "@mui/system";
import { PlayableQuizState } from "../../pages/PlayQuiz";
import Question from "./Question";
import { Button, Grid, Typography } from "@mui/material";
import TypoGraphyBebasNeue from "../atoms/TypographyBebasNeue";
import { useNavigate } from "react-router-dom";
import TextInput from "../atoms/TextInput";
import usePost from "../../hooks/usePost";

const Container = styled(Box)({
  height: "85vh",
});

const QuestionContainer = styled(Box)({
  margin: "2rem",
  display: "flex",
  justifyContent: "center",
});

const Title = styled("h1")({
  padding: 0,
  margin: "1rem",
  fontSize: "2rem",
  color: "Gray",
  textAlign: "center",
  letterSpacing: "0.2rem",
  fontFamily: "Bebas Neue",
});

interface QuizPlayProps {
  quiz: PlayableQuizState;
}

const QuizPlay: React.FC<QuizPlayProps> = ({ quiz }) => {
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [isTheLastQuestion, setIsTheLastQuestion] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [username, setUsername] = useState("");
  console.log("🚀 ~ file: index.tsx ~ line 40 ~ username", !!username);

  const { axiosPost, response, isLoading, error, clearField } = usePost();

  useEffect(() => {
    if (currentQuestionNumber === quiz.questions.length - 1) {
      setIsTheLastQuestion(true);
    }
  }, [currentQuestionNumber]);

  const nextQuestion = (isCorrect: boolean) => {
    if (isCorrect) {
      setCurrentScore((prevScore) => prevScore + 1);
    }
    setCurrentQuestionNumber(currentQuestionNumber + 1);
  };

  const finishQuiz = (isCorrect: boolean) => {
    if (isCorrect) {
      setCurrentScore((prevScore) => prevScore + 1);
    }
    setIsFinished(true);
  };

  const navigate = useNavigate();

  const handleFinishedClick = () => {
    const url = process.env.REACT_APP_API_BASE + "score/create";
    const formatedValues = {
      username: username,
      score: currentScore,
      quizid: quiz.id,
    };
    axiosPost(url, formatedValues).then((res) => {
      console.log("response", res);
      navigate("/");
    });
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  return (
    <Grid
      container
      justifyContent="center"
      direction="column"
      alignItems="center"
      rowSpacing={5}
    >
      <Grid item xs={12}>
        <TypoGraphyBebasNeue align="center" variant="h2" sx={{ color: "gray" }}>
          {quiz.name}
        </TypoGraphyBebasNeue>
      </Grid>
      <Grid item xs={12}>
        {!isFinished ? (
          <QuestionContainer>
            <Question
              question={quiz.questions[currentQuestionNumber]}
              nextQuestion={nextQuestion}
              isTheLastQuestion={isTheLastQuestion}
              finishQuiz={finishQuiz}
              setCurrentScore={setCurrentScore}
            />
          </QuestionContainer>
        ) : (
          <Grid
            container
            justifyContent="center"
            direction="column"
            alignItems="center"
            rowSpacing={5}
          >
            <Grid item xs={12}>
              <TypoGraphyBebasNeue align="center" variant="h3" color="primary">
                Votre score est {(currentScore / quiz.questions.length) * 100}
              </TypoGraphyBebasNeue>
            </Grid>
            <Grid
              item
              xs={12}
              container
              justifyContent="center"
              alignItems="center"
              direction="column"
              rowGap={2}
            >
              <Grid item xs={12}>
                <TextInput
                  placeholder="Nom d'utilisateur"
                  label="Nom d'utilisateur"
                  onChange={handleUsernameChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  onClick={handleFinishedClick}
                  disabled={!username}
                  color="primary"
                >
                  Envoyer mon score
                </Button>
              </Grid>
            </Grid>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default QuizPlay;
