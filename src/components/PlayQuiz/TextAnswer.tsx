import { IAnswers } from "./Question";
import { InputBase, Button, Typography } from "@mui/material";
import { useState } from "react";
import { Box } from "@mui/system";
import CenterBox from "../atoms/CenterBox";
import TextInput from "../atoms/TextInput";
import { styled } from "@mui/system";
import TextReponse from "../atoms/TextResponse";

interface TextAnswerProps {
  isTheLastQuestion: boolean;
  finishQuiz: () => void;
  nextQuestion: () => void;
}

const TextAnswer: React.FC<TextAnswerProps> = ({
  isTheLastQuestion,
  finishQuiz,
  nextQuestion,
}) => {
  const [answer, setAnswer] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(event.target.value);
  };

  const [isVerify, setIsVerify] = useState(false);
  const [response, setResponse] = useState<null | {
    id: string;
    text: string;
  }>(null);

  const handleVerify = async () => {
    if (isVerify) return;
    setTimeout(() => {
      setResponse({ id: "45", text: "Tigre du bungal" });
      setIsVerify(true);
    }, 2000);
  };

  const isCorrectAnswer = (): boolean => {
    if (!response || !answer) return false;
    return response.text.toLowerCase() === answer.toLowerCase();
  };

  return (
    <CenterBox>
      <TextInput onChange={handleChange} placeholder="Réponse" value={answer} />
      {response &&
        (isCorrectAnswer() ? (
          <TextReponse isCorrect={true}>Bonne réponse</TextReponse>
        ) : (
          <TextReponse isCorrect={false}>
            Mauvaise réponse la bonne réponse était {response?.text}
          </TextReponse>
        ))}

      {!isVerify ? (
        <Button variant="contained" onClick={handleVerify}>
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

export default TextAnswer;
