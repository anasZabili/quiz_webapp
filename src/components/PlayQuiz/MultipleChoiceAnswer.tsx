import { Button } from "@mui/material";
import { useEffect, useState, useCallback } from "react";
import useGet from "../../hooks/useGet";
import CenterBox from "../atoms/CenterBox";
import TextReponse from "../atoms/TextResponse";
import CheckBoxGroup from "./CheckBoxGroup";
import Joi from "joi";

import { IAnswers } from "./Question";

interface MultipleChoiceAnswerProps {
  answers: IAnswers["answers"];
  isTheLastQuestion: boolean;
  finishQuiz: (isCorrect: boolean) => void;
  isSingleChoice: boolean;
  questionId: string;
  nextQuestion: (isCorrect: boolean) => void;
}

interface CheckboxsState {
  checkboxsState: {
    text: string;
    isChecked: boolean;
  }[];
}

const MultipleChoiceAnswer: React.FC<MultipleChoiceAnswerProps> = ({
  answers,
  isTheLastQuestion,
  finishQuiz,
  nextQuestion,
  isSingleChoice,
  questionId,
}) => {
  console.log(
    "🚀 ~ file: MultipleChoiceAnswer.tsx ~ line 36 ~ questionId",
    questionId
  );
  const [checked, setChecked] = useState<CheckboxsState["checkboxsState"]>();
  console.log(
    "🚀 ~ file: MultipleChoiceAnswer.tsx ~ line 50 ~ checked",
    checked
  );

  const [isVerify, setIsVerify] = useState(false);

  const { axiosGet, response, isLoading, error } = useGet();

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
    console.log(
      "🚀 ~ file: MultipleChoiceAnswer.tsx ~ line 71 ~ handleChange ~ checked",
      checked
    );
    const text = event.target.value;
    console.log(
      "🚀 ~ file: MultipleChoiceAnswer.tsx ~ line 72 ~ handleChange ~ id",
      text
    );
    setChecked((prevState) => {
      const newState = prevState?.map((item) => {
        if (item.text === text) {
          return { ...item, isChecked: checked };
        }
        return item;
      });
      return newState;
    });
  };

  const handleVerify = () => {
    if (isVerify) return;
    const url =
      process.env.REACT_APP_API_BASE + `answers/correct/${questionId}`;
    console.log(
      "🚀 ~ file: MultipleChoiceAnswer.tsx ~ line 84 ~ handleVerify ~ url",
      url
    );
    axiosGet(url);
    if (!isLoading && !error) {
      setIsVerify(true);
    }
  };
  const isCorrectAnswer = useCallback((): boolean => {
    if (!response || !checked) return false;
    const correctAnswersIds = response.map((item: { id: any }) => item.id);
    const playerAnswersIds = checked.map((item) => {
      if (item.isChecked) return item.text;
      return null;
    });

    // check if correctAnswersIds is equal to playerAnswersIds
    return (
      correctAnswersIds.every((item: string | null) =>
        playerAnswersIds.includes(item)
      ) && playerAnswersIds.length === correctAnswersIds.length
    );
  }, [checked, response]);

  // const isCorrectAnswer = (): boolean => {
  //   if (!response || !checked) return false;
  //   const correctAnswersIds = response.map((item: { id: any }) => item.id);
  //   const playerAnswersIds = checked.map((item) => {
  //     if (item.isChecked) return item.id;
  //     return null;
  //   });

  //   // check if carrectAnswersIds is equal to playerAnswersIds
  //   return (
  //     correctAnswersIds.every((item: string | null) =>
  //       playerAnswersIds.includes(item)
  //     ) && playerAnswersIds.length === correctAnswersIds.length
  //   );
  // };

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
            Mauvaise réponse la/les bonne réponse est/sont
            {response.map((value: { text: string }) => value.text + " ")}
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
    </CenterBox>
  );
};
export default MultipleChoiceAnswer;
