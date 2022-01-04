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
import { CreatedQuizState } from "./CreateQuizForm";
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
  handleChange: (answers: CreatedQuizState["questions"][0]["answers"]) => void;
}

const MulpleChoiceInput: React.FC<MultipleChoiceInputProps> = ({
  input,
  handleChange,
}) => {
  const [answers, setAnswers] = useState<
    { text: string; isCorrect: boolean }[]
  >(
    Array(4).fill({
      text: "",
      isCorrect: false,
    })
  );
  console.log("🚀 ~ file: MutipleChoiceInput.tsx ~ line 63 ~ answers", answers);

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
        <StyledFormGroup>
          {Array(4)
            .fill(0)
            ?.map((_, index) => {
              console.log("index --", answers[index].text);
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
        <Button onClick={() => handleChange(answers)}>
          Click pr submit le change
        </Button>
      </CenterBox>
    </StyledBox>
  );
};

export default MulpleChoiceInput;
