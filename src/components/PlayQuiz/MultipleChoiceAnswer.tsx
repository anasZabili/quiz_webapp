import { Typography } from "@mui/material";
import { useEffect, useState, useCallback } from "react";
import useGet from "../../hooks/useGet";
import CenterBox from "../atoms/CenterBox";
import TextReponse from "../atoms/TextResponse";
import CheckBoxGroup from "./CheckBoxGroup";
import Joi from "joi";
import { Grid } from "@mui/material";

import { IAnswers } from "./Question";
import Button from "../atoms/Button";

interface MultipleChoiceAnswerProps {
  answers: IAnswers["answers"];
  isTheLastQuestion: boolean;
  finishQuiz: (isCorrect: boolean) => void;
  isSingleChoice: boolean;
  questionId: string;
  nextQuestion: (isCorrect: boolean) => void;
}

export interface CheckboxsState {
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
  questionId,
}) => {
  const [checked, setChecked] = useState<CheckboxsState["checkboxsState"]>();
  console.log(
    "🚀 ~ file: MultipleChoiceAnswer.tsx ~ line 37 ~ checked",
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
    const id = event.target.value;
    setChecked((prevState) => {
      if (isSingleChoice) {
        console.log("je rentre dans le is single choice");
        prevState?.forEach((answer: any) => {
          answer.isChecked = false;
        });
      }
      return prevState?.map((checkbox) => {
        if (checkbox.id === id) {
          return { ...checkbox, isChecked: checked };
        }
        return checkbox;
      });
    });
  };

  const handleVerify = () => {
    if (isVerify) return;

    const url =
      process.env.REACT_APP_API_BASE + `answers/correct/${questionId}`;
    axiosGet(url);
    // if (!isLoading) {
    setIsVerify(true);
    // }
  };
  const isCorrectAnswer = useCallback((): boolean => {
    const hasOneCheckedCorrect = checked?.find((item) => item.isChecked);
    if (!response || !hasOneCheckedCorrect) {
      return false;
    }

    const correctAnswersIds = response.map((item: { id: any }) => item.id);
    const playerAnswersIds = checked?.map((item) => {
      if (item.isChecked) return item.id;
      return null;
    });
    const playerAnswersIdsWithoutNull = playerAnswersIds?.filter(
      (item) => item !== null
    );

    return (
      correctAnswersIds.every((item: string | null) =>
        playerAnswersIdsWithoutNull?.includes(item)
      ) && playerAnswersIdsWithoutNull?.length === correctAnswersIds.length
    );
  }, [checked, response]);

  const hasTheGoodNumberOfAnswer = (): boolean => {
    if (!checked) return false;
    if (isSingleChoice) {
      return checked.filter((item) => item.isChecked).length === 1;
    } else {
      return checked.filter((item) => item.isChecked).length === 2;
    }
  };

  const hasMoreThanOneElement = (array: any[]): boolean => {
    return array.length > 1;
  };

  return (
    <Grid
      container
      justifyContent="center"
      direction="column"
      alignItems="center"
      rowSpacing={2}
    >
      <Grid item xs={12}>
        <CheckBoxGroup
          answers={answers}
          handleChange={handleChange}
          isVerify={isVerify}
          checked={checked}
        />
      </Grid>
      <Grid item xs={12}>
        {response &&
          (isCorrectAnswer() ? (
            <TextReponse isCorrect={true}>Bonne réponse</TextReponse>
          ) : (
            <TextReponse isCorrect={false}>
              Mauvaise réponse {hasMoreThanOneElement(response) ? "les" : "la"}{" "}
              bonne{hasMoreThanOneElement(response) && "s"} réponse
              {hasMoreThanOneElement(response) && "s"}{" "}
              {hasMoreThanOneElement(response) ? "sont " : "est "}
              {response.map((value: { text: string }) => value.text + " ")}
            </TextReponse>
          ))}
      </Grid>
      <Grid item xs={12}>
        {!isVerify ? (
          <Button
            variant="contained"
            onClick={handleVerify}
            disabled={!hasTheGoodNumberOfAnswer()}
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
      </Grid>
    </Grid>
  );
};
export default MultipleChoiceAnswer;
