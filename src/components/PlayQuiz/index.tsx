import { useMemo, useEffect, useState } from "react";
import { Box, styled } from "@mui/system";
import { PlayableQuizState } from "../../pages/PlayQuiz";
import Question from "./Question";
import { Grid, Rating, Typography } from "@mui/material";
import TypoGraphyBebasNeue from "../atoms/TypographyBebasNeue";
import { useNavigate } from "react-router-dom";
import TextInput from "../atoms/TextInput";
import usePost from "../../hooks/usePost";
import { toast } from "react-toastify";
import { customErrorToast, customSuccessToast } from "../../utils/customToast";
import Button from "../atoms/Button";

const QuestionContainer = styled(Box)({
  margin: "2rem",
  display: "flex",
  justifyContent: "center",
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

  const [rate, setRate] = useState<number | null>(2);
  const [disableRating, setDisableRating] = useState(false);

  const { axiosPost, response, isLoading, error } = usePost();

  // const calculateScore = () => {
  //   return (curent / quiz.questions.length) * 100;
  // };

  const calculatedScore = useMemo(() => {
    return (currentScore / quiz.questions.length) * 100;
  }, [currentScore, quiz.questions.length]);

  useEffect(() => {
    if (currentQuestionNumber === quiz.questions.length - 1) {
      setIsTheLastQuestion(true);
    }
  }, [currentQuestionNumber, quiz.questions.length]);

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

  useEffect(() => {
    if (error) {
      customErrorToast(
        "Erreur",
        "Une erreur est survenue lors de l'enregistrement de votre score"
      );
    }
    if (response) {
      customSuccessToast("Succès", "Votre score a bien été enregistré");
    }
  }, [error, response]);

  const handleFinishedClick = () => {
    const url = process.env.REACT_APP_API_BASE + "score";
    const formatedValues = {
      username: username,
      score: calculatedScore,
      quizid: quiz.id,
    };
    axiosPost(url, formatedValues);
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleRating = (values: Number | null) => {
    const url = process.env.REACT_APP_API_BASE + "quiz/" + quiz.id + "/rate";
    const formatedValues = {
      rate: values,
    };
    console.log(
      "🚀 ~ file: index.tsx ~ line 106 ~ handleRating ~ formatedValues",
      formatedValues
    );

    axiosPost(url, formatedValues).then((res) => {
      console.log("response", res);
      if (!error) {
        // handle Toast
        customSuccessToast("Succès", "Note enregistrée");
        setDisableRating(true);
      }
    });
  };

  return (
    <>
      <Grid
        container
        justifyContent="center"
        direction="row"
        alignItems="center"
        spacing={2}
      >
        <Grid item xs={12}>
          <TypoGraphyBebasNeue
            align="center"
            variant="h2"
            sx={{ color: "gray" }}
          >
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
              spacing={2}
            >
              <Grid item xs={12}>
                <TypoGraphyBebasNeue
                  align="center"
                  variant="h3"
                  color="primary"
                >
                  Votre score est {calculatedScore}
                </TypoGraphyBebasNeue>
              </Grid>

              <Grid item xs={12}>
                <TypoGraphyBebasNeue
                  align="center"
                  variant="h4"
                  color="primary"
                >
                  Noter ce quiz :
                  <Rating
                    name="simple-controlled"
                    value={rate}
                    disabled={disableRating}
                    onChange={(
                      event: React.SyntheticEvent<Element, Event>,
                      newValue: number | null
                    ) => {
                      handleRating(newValue);
                    }}
                  />
                </TypoGraphyBebasNeue>
              </Grid>

              <Grid
                item
                xs={12}
                container
                justifyContent="center"
                alignItems="center"
                direction="column"
                spacing={2}
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
    </>
  );
};

export default QuizPlay;
