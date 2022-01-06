import { Button } from "@mui/material";
import { useEffect, useState, useCallback } from "react";
import useGet from "../../hooks/useGet";
import CenterBox from "../atoms/CenterBox";
import TextReponse from "../atoms/TextResponse";
import CheckBoxGroup from "./CheckBoxGroup";
import Joi from "joi";
import { Grid } from "@mui/material";

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
      const newState = prevState?.map((item) => {
        if (item.id === id) {
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

  const hasAtLeastOneAnswer = (): boolean => {
    if (!checked) return false;
    return checked.some((item) => item.isChecked);
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
        />
      </Grid>
      <Grid item xs={12}>
        {response &&
          (isCorrectAnswer() ? (
            <TextReponse isCorrect={true}>Bonne réponse</TextReponse>
          ) : (
            <TextReponse isCorrect={false}>
              Mauvaise réponse la/les bonne réponse est/sont
              {response.map((value: { text: string }) => value.text + " ")}
            </TextReponse>
          ))}
      </Grid>
      <Grid item xs={12}>
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
      </Grid>
    </Grid>
  );
};
export default MultipleChoiceAnswer;
