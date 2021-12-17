import { IAnswers } from "./Question";
import { InputBase, Button, Typography } from "@mui/material";
import { useState } from "react";
import { Box } from "@mui/system";
import CenterBox from "../atoms/CenterBox";
import TextInput from "../atoms/TextInput";
import { styled } from "@mui/system";
import CorrectTextReponse from "../atoms/CorrectTextResponse";

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
      setResponse({ id: "45", text: "bonne réponse" });
      setIsVerify(true);
    }, 2000);
  };

  return (
    <CenterBox>
      <TextInput onChange={handleChange} placeholder="Réponse" value={answer} />
      {response && <CorrectTextReponse>{response.text}</CorrectTextReponse>}

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
