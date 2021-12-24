import { Button } from "@mui/material";
import { useEffect, useState, useCallback } from "react";
import CenterBox from "../atoms/CenterBox";
import TextReponse from "../atoms/TextResponse";
import CheckBoxGroup from "./CheckBoxGroup";

import { IAnswers } from "./Question";

interface MultipleChoiceAnswerProps {
  answers: IAnswers["answers"];
  isTheLastQuestion: boolean;
  finishQuiz: () => void;
  nextQuestion: () => void;
  isSingleChoice: boolean;
}

interface CheckboxsState {
  checkboxsState: {
    id: string;
    isChecked: boolean;
  }[];
}
const MultipleChoiceAnswer: React.FC<MultipleChoiceAnswerProps> = ({
  answers,
  isTheLastQuestion,
  finishQuiz,
  nextQuestion,
  isSingleChoice,
}) => {
  const [checked, setChecked] = useState<CheckboxsState["checkboxsState"]>();

  const [isVerify, setIsVerify] = useState(false);

  const [response, setResponse] = useState<
    | null
    | {
        id: string;
        text: string;
      }[]
  >(null);

  console.log(
    "🚀 ~ file: MultipleChoiceAnswer.tsx ~ line 30 ~ checked",
    checked
  );

  useEffect(() => {
    setChecked(
      answers?.map((answer) => ({
        text: answer.text,
        id: answer.id,
        isChecked: false,
      }))
    );
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    const id = event.target.value;
    setChecked((prevState) => {
      const newState = prevState?.map((item) => {
        if (item.id === id) {
          return { ...item, isChecked: checked };
        }
        return item;
      });
      return newState;
    });
  };

  const handleVerify = async () => {
    if (isVerify) return;
    setTimeout(() => {
      setResponse([
        { id: "014fcb57-7450-4302-6c5a-08d9be4c152d", text: "Tigre du bungal" },
        { id: "19fa07ae-e214-411f-6c5b-08d9be4c152d", text: "Croque monsieur" },
      ]);
      setIsVerify(true);
    }, 2000);
  };

  const isCorrectAnswer = (): boolean => {
    if (!response || !checked) return false;
    const correctAnswersIds = response.map((item) => item.id);
    const playerAnswersIds = checked.map((item) => {
      if (item.isChecked) return item.id;
      return null;
    });

    // check if carrectAnswersIds is equal to playerAnswersIds
    return (
      correctAnswersIds.every((item) => playerAnswersIds.includes(item)) &&
      playerAnswersIds.length === correctAnswersIds.length
    );
  };

  const hasAtLeastOneAnswer = (): boolean => {
    if (!checked) return false;
    return checked.some((item) => item.isChecked);
  };

  return (
    <CenterBox>
      <CheckBoxGroup
        answers={answers}
        handleChange={handleChange}
        isVerify={isVerify}
      />
      {response &&
        (isCorrectAnswer() ? (
          <TextReponse isCorrect={true}>Bonne réponse</TextReponse>
        ) : (
          <TextReponse isCorrect={false}>
            Mauvaise réponse la/les bonne réponse était{" "}
            {response.map((value) => value.text + ", ")}
          </TextReponse>
        ))}
      {!isVerify ? (
        <Button
          variant="contained"
          onClick={handleVerify}
          disabled={!hasAtLeastOneAnswer()}
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
export default MultipleChoiceAnswer;
