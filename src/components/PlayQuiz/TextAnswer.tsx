import { InputBase, Typography, Grid } from "@mui/material";
import { useCallback, useState } from "react";
import CenterBox from "../atoms/CenterBox";
import TextInput from "../atoms/TextInput";
import TextReponse from "../atoms/TextResponse";
import useGet from "../../hooks/useGet";
import Button from "../atoms/Button";

interface TextAnswerProps {
  isTheLastQuestion: boolean;
  finishQuiz: (isCorrect: boolean) => void;
  nextQuestion: (isCorrect: boolean) => void;
  questionId: string;
}

const TextAnswer: React.FC<TextAnswerProps> = ({
  isTheLastQuestion,
  finishQuiz,
  nextQuestion,
  questionId,
}) => {
  console.log("🚀 ~ file: TextAnswer.tsx ~ line 21 ~ questionId", questionId);
  const [answer, setAnswer] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(event.target.value);
  };
  const { axiosGet, response, isLoading, error } = useGet();

  const [isVerify, setIsVerify] = useState(false);

  const handleVerify = async () => {
    if (isVerify) return;
    const url =
      process.env.REACT_APP_API_BASE + `answers/correct/${questionId}`;
    console.log(
      "🚀 ~ file: TextAnswer.tsx ~ line 33 ~ handleVerify ~ url",
      url
    );
    axiosGet(url);
    // if (!isLoading && !error) {
    setIsVerify(true);
    // }
  };
  const isCorrectAnswer = useCallback((): boolean => {
    if (!response || !answer) return false;
    return response[0].text.toLowerCase() === answer.toLowerCase();
  }, [answer, response]);
  // const isCorrectAnswer = (): boolean => {
  //   if (!response || !answer) return false;
  //   return response.text.toLowerCase() === answer.toLowerCase();
  // };

  return (
    <Grid
      container
      justifyContent="center"
      direction="column"
      alignItems="center"
      rowSpacing={2}
    >
      <Grid item xs={12}>
        <TextInput
          onChange={handleChange}
          disabled={isVerify}
          placeholder="Réponse"
          value={answer}
        />
      </Grid>
      <Grid item xs={12}>
        {response &&
          (isCorrectAnswer() ? (
            <TextReponse isCorrect={true}>Bonne réponse</TextReponse>
          ) : (
            <TextReponse isCorrect={false}>
              Mauvaise réponse la bonne réponse était {response[0]?.text}
            </TextReponse>
          ))}
      </Grid>
      <Grid item xs={12}>
        {!isVerify ? (
          <Button variant="contained" onClick={handleVerify} disabled={!answer}>
            Vérifier
          </Button>
        ) : isTheLastQuestion ? (
          <Button
            variant="contained"
            onClick={() => finishQuiz(isCorrectAnswer())}
          >
            Terminer
          </Button>
        ) : (
          <Button
            variant="contained"
            onClick={() => nextQuestion(isCorrectAnswer())}
          >
            Suivant
          </Button>
        )}
      </Grid>
    </Grid>
  );
};

export default TextAnswer;
