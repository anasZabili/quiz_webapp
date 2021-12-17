import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import CenterBox from "../atoms/CenterBox";
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

  useEffect(() => {
    setChecked(
      answers?.map((answer) => ({
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

  return (
    <CenterBox>
      <CheckBoxGroup answers={answers} handleChange={handleChange} />
      {isTheLastQuestion ? (
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
