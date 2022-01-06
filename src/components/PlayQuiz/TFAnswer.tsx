import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { IAnswers } from "./Question";
import CenterBox from "../atoms/CenterBox";
import { useState } from "react";
import TextReponse from "../atoms/TextResponse";
import useGet from "../../hooks/useGet";
import Button from "../atoms/Button";

interface TFAnswerProps {
  answers: IAnswers["answers"];
  isTheLastQuestion: boolean;
  finishQuiz: () => void;
  nextQuestion: () => void;
  questionId: string;
}

const TFAnswer: React.FC<TFAnswerProps> = ({
  answers,
  isTheLastQuestion,
  finishQuiz,
  nextQuestion,
  questionId,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAnswer(event.target.value);
  };

  const [isVerify, setIsVerify] = useState(false);

  const { axiosGet, response, isLoading, error } = useGet();

  const handleVerify = () => {
    if (isVerify) return;
    const url =
      process.env.REACT_APP_API_BASE + `answers/correct/${questionId}`;
    axiosGet(url);
    if (!isLoading && !error) {
      setIsVerify(true);
    }
  };

  const isCorrectAnswer = (): boolean => {
    if (!response || !selectedAnswer) return false;
    return response[0].text === selectedAnswer;
  };
  return (
    <CenterBox>
      <FormControl component="fieldset" disabled={isVerify}>
        <Typography>Vrai ou Faux</Typography>
        <RadioGroup
          aria-label="gender"
          name="controlled-radio-buttons-group"
          value={selectedAnswer}
          onChange={handleChange}
        >
          {answers?.map((value, index) => (
            <FormControlLabel
              value={value.text}
              control={<Radio />}
              label={value.text}
            />
          ))}
          {}
        </RadioGroup>
        {response &&
          (isCorrectAnswer() ? (
            <TextReponse isCorrect={isCorrectAnswer()}>
              Bonne réponse
            </TextReponse>
          ) : (
            <TextReponse isCorrect={isCorrectAnswer()}>
              Mauvaise réponse
            </TextReponse>
          ))}
      </FormControl>
      {!isVerify ? (
        <Button
          variant="contained"
          onClick={handleVerify}
          disabled={!selectedAnswer}
        >
          Vérifier
        </Button>
      ) : isTheLastQuestion ? (
        <Button variant="contained" onClick={finishQuiz}>
          Terminer
        </Button>
      ) : (
        <Button variant="contained" onClick={nextQuestion}>
          Suivant
        </Button>
      )}
    </CenterBox>
  );
};

export default TFAnswer;
