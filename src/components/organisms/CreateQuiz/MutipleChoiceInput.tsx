import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Box,
  Typography,
  Button,
} from "@mui/material";
import { styled } from "@mui/system";
import { useEffect, useState } from "react";
import CheckBoxAndLabel from "../../molecules/CheckboxAndLabel";
import InputAndLabel from "../../molecules/InputAndLabel";
import { CreatedQuizState } from "./CreateQuizStepper";
import TextInput from "../../atoms/TextInput";
import CenterBox from "../../atoms/CenterBox";

const StyledBox = styled(Box)({
  display: "grid",
  gridTemplateColumns: "auto auto",
  gridGap: "1rem",
  alignItems: "center",
  justifyItems: "center",
});

const StyledFormGroup = styled(FormGroup)({
  display: "grid",
  gridTemplateColumns: "auto auto",
  gridGap: "1rem",
  alignItems: "center",
  justifyItems: "center",
});

const CenterFormControlLabel = styled(FormControlLabel)({
  display: "flex",
  justifyContent: "center",
});

const CheckBoxContainer = styled(Box)({
  display: "flex",
  flexDirection: "row",
  width: "200px",
});

const Grid = styled(Box)({
  display: "grid",
  gridTemplateColumns: "auto auto",
  gridGap: "1rem",
  margin: "2rem 0",
});

interface MultipleChoiceInputProps {
  input?: {
    id?: string;
    text: string;
    answers: { id?: string; text: string; isCorrect: boolean }[];
  };
  questionType: number;
  handleChange: (question: CreatedQuizState["questions"][0]) => void;
  defaultValues?: CreatedQuizState["questions"][0];
}

const MulpleChoiceInput: React.FC<MultipleChoiceInputProps> = ({
  input,
  handleChange,
  defaultValues,
  questionType,
}) => {
  const [answers, setAnswers] = useState<
    { text: string; isCorrect: boolean }[]
  >(
    Array(4).fill({
      text: "",
      isCorrect: false,
    })
  );

  const [questionText, setQuestionText] = useState(defaultValues?.text || "");
  // useEffect(() => {
  //   handleChange(answers);
  // }, [answers]);

  const handleCheckboxChange = (
    inputEvent: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    // deep copy answers into newAnswers
    const newAnswers = cloneArray(answers);

    newAnswers[index].isCorrect = inputEvent.target.checked;
    setAnswers(newAnswers);
  };

  // deep clone array fonction
  const cloneArray = (array: any[]) => {
    return JSON.parse(JSON.stringify(array));
  };

  const handleInputChange = (
    inputEvent: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    // deep copy answers into newAnswers
    const newAnswers = cloneArray(answers);

    newAnswers[index].text = inputEvent.target.value;
    setAnswers(newAnswers);
  };
  return (
    <StyledBox>
      <CenterBox>
        <TextInput
          inputType="text"
          placeholder={`Question`}
          value={questionText}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setQuestionText(event.target.value)
          }
          // label="Mot de passe du Quiz"
        />
        <StyledFormGroup>
          {Array(4)
            .fill(0)
            ?.map((_, index) => {
              return (
                <Grid>
                  <TextInput
                    inputType="text"
                    placeholder={`Réponse ${index + 1}`}
                    value={answers[index].text}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      handleInputChange(e, index)
                    }
                    // label="Mot de passe du Quiz"
                  />
                  <CheckBoxAndLabel
                    label="Correct"
                    onChange={(e) => handleCheckboxChange(e, index)}
                  />
                </Grid>
              );
            })}
        </StyledFormGroup>
        <Button
          onClick={() =>
            handleChange({
              text: questionText,
              type: questionType,
              answers: answers,
            })
          }
        >
          Click pr submit le change
        </Button>
      </CenterBox>
    </StyledBox>
  );
};

export default MulpleChoiceInput;
