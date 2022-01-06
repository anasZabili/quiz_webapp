import { FormGroup, Grid } from "@mui/material";
import { styled } from "@mui/system";
import { useEffect, useState } from "react";
import CheckBoxAndLabel from "../../molecules/CheckboxAndLabel";
import { CreatedQuizState } from "./CreateQuizStepper";
import TextInput from "../../atoms/TextInput";
import { UpdateQuizState } from "../UpdateQuiz";
import Button from "../../atoms/Button";

const StyledFormGroup = styled(FormGroup)({
  maxWidth: "1280px",
});

interface MultipleChoiceInputProps {
  questionType: number;
  handleChange: (question: CreatedQuizState["questions"][0]) => void;
  defaultValues?: UpdateQuizState["questions"][0];
  isSingleChoice?: boolean;
}

const MultipleChoiceInput: React.FC<MultipleChoiceInputProps> = ({
  handleChange,
  defaultValues,
  questionType,
  isSingleChoice = false,
}) => {
  const fillDefaultValue = (
    array: {
      text: "";
      isCorrect: false;
    }[]
  ) => {
    while (array.length < 4) {
      array.push({
        text: "",
        isCorrect: false,
      });
    }
    return array;
  };

  const [answers, setAnswers] = useState<
    { text: string; isCorrect: boolean }[]
  >(
    defaultValues && defaultValues.answers && defaultValues.answers?.length > 0
      ? fillDefaultValue(
          defaultValues.answers.map((value: { text: any; isCorrect: any }) => {
            return {
              text: value?.text || "",
              isCorrect: value?.isCorrect || false,
            };
          })
        )
      : Array(4).fill({
          text: "",
          isCorrect: false,
        })
  );
  console.log("🚀 ~ file: MutipleChoiceInput.tsx ~ line 31 ~ answers", answers);

  const cloneArray = (array: any[]) => {
    return JSON.parse(JSON.stringify(array));
  };

  useEffect(() => {
    console.log("je suis o debut du useEffect");
    if (answers.length < 4) {
      const newAnswers = cloneArray(answers);
      while (newAnswers.length < 4) {
        newAnswers.push({
          text: "",
          isCorrect: false,
        });
      }
      setAnswers(newAnswers);
    }
  }, []);

  const [questionText, setQuestionText] = useState(defaultValues?.text || "");

  const handleCheckboxChange = (
    inputEvent: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    // deep copy answers into newAnswers
    const newAnswers = cloneArray(answers);
    if (isSingleChoice) {
      newAnswers.forEach((answer: any) => {
        answer.isCorrect = false;
      });
    }

    newAnswers[index].isCorrect = inputEvent.target.checked;
    setAnswers(newAnswers);
  };

  const handleInputChange = (
    inputEvent: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newAnswers = cloneArray(answers);

    newAnswers[index].text = inputEvent.target.value;
    setAnswers(newAnswers);
  };
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={3}
    >
      <Grid item xs={12}>
        <TextInput
          type="text"
          placeholder={`Question`}
          value={questionText}
          // fullWidth
          // sx={{ width: "90%" }}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setQuestionText(event.target.value)
          }
        />
      </Grid>
      <Grid item xs={12}>
        <StyledFormGroup>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            {Array(4)
              .fill(0)
              ?.map((_, index) => {
                return (
                  <Grid
                    item
                    spacing={2}
                    xs={12}
                    md={6}
                    container
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                    wrap="nowrap"
                  >
                    <Grid item>
                      <TextInput
                        inputType="text"
                        placeholder={`Réponse ${index + 1}`}
                        value={answers[index].text}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          handleInputChange(e, index)
                        }
                        // label="Mot de passe du Quiz"
                      />
                    </Grid>
                    <Grid item>
                      <CheckBoxAndLabel
                        label="Correct"
                        onChange={(e) => handleCheckboxChange(e, index)}
                        checked={answers[index].isCorrect}
                      />
                    </Grid>
                  </Grid>
                );
              })}
          </Grid>
        </StyledFormGroup>
      </Grid>
      <Grid item xs={12}>
        <Button
          onClick={() =>
            handleChange({
              text: questionText,
              type: questionType,
              answers: answers,
            })
          }
        >
          Suivant
        </Button>
      </Grid>
    </Grid>
  );
};

export default MultipleChoiceInput;
