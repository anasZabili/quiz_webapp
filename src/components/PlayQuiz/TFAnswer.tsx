import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { IAnswers } from "./Question";
import { Box } from "@mui/system";
import CenterBox from "../atoms/CenterBox";
import { useState } from "react";
import CorrectTextReponse from "../atoms/CorrectTextResponse";

interface TFAnswerProps {
  answers: IAnswers["answers"];
  isTheLastQuestion: boolean;
  finishQuiz: () => void;
  nextQuestion: () => void;
}

const TFAnswer: React.FC<TFAnswerProps> = ({
  answers,
  isTheLastQuestion,
  finishQuiz,
  nextQuestion,
}) => {
  console.log("🚀 ~ file: TFAnswer.tsx ~ line 28 ~ answers", answers);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  console.log(
    "🚀 ~ file: TFAnswer.tsx ~ line 28 ~ selectedAnswer",
    selectedAnswer
  );
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setSelectedAnswer(event.target.value);
  };

  const [isVerify, setIsVerify] = useState(false);
  const [response, setResponse] = useState<null | { id: string; text: string }>(
    null
  );

  const handleVerify = async () => {
    if (isVerify) return;
    setTimeout(() => {
      setResponse({ id: "15", text: "Vrai" });
      setIsVerify(true);
    }, 2000);
  };

  const isCorrectAnswer = (): boolean => {
    if (!response || !selectedAnswer) return false;
    return response.text === selectedAnswer;
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
        {response && (
          <CorrectTextReponse>
            {isCorrectAnswer() ? "Bonne réponse" : "Mauvaise réponse"}
          </CorrectTextReponse>
        )}
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
