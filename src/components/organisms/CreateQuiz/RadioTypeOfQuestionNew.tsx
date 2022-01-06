import { RadioGroup, FormControlLabel, Typography } from "@mui/material";
import { useState } from "react";
import { styled } from "@mui/system";
import Radio from "../../atoms/Radio";
import MultipleChoiceInput from "./MutipleChoiceInput";
import { CreatedQuizState } from "./CreateQuizStepper";
import TextChoice from "./TextChoice";
import { UpdateQuizState } from "../UpdateQuiz";

const StyledControlFormLabel = styled(FormControlLabel)({
  color: "white",
});

const StyledRadioGroup = styled(RadioGroup)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  margin: "0",
  marginBottom: "20px",
});

interface RadioTypeOfQuestionNewProps {
  handleChange: (question: CreatedQuizState["questions"][0]) => void;
  questionTypes: { key: string; value: number }[];
  defaultValues?: UpdateQuizState["questions"][0];
}

const RadioTypeOfQuestionNew: React.FC<RadioTypeOfQuestionNewProps> = ({
  handleChange,
  questionTypes,
  defaultValues,
}) => {
  // const [selectedAnswer, setSelectedAnswer] = useState(questionTypes[0].value);
  const [typeOfQuestion, setTypeOfQuestion] = useState<number>(
    defaultValues?.type || questionTypes[0].value
  );

  const handleInputAnswerChange = (
    question: CreatedQuizState["questions"][0]
  ) => {
    handleChange(question);
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTypeOfQuestion(Number(event.target.value));
    // setSelectedAnswer(event.target.value);
  };
  const ComputedAnswerComponent = (): React.ReactElement => {
    switch (typeOfQuestion) {
      case null:
        return (
          <Typography color="primary">
            Une erreur est survenu car null
          </Typography>
        );

      // Choix multiple
      case 0:
        return (
          <MultipleChoiceInput
            questionType={typeOfQuestion}
            handleChange={handleInputAnswerChange}
            defaultValues={defaultValues}
          />
        );
      // choix unique
      case 1:
        return (
          <MultipleChoiceInput
            questionType={typeOfQuestion}
            handleChange={handleInputAnswerChange}
            defaultValues={defaultValues}
            isSingleChoice={true}
          />
        );

      // réponse libre
      case 2:
        return (
          <TextChoice
            questionType={typeOfQuestion}
            handleChange={handleInputAnswerChange}
            defaultValues={defaultValues}
          />
        );
      default:
        return <Typography color="primary">Une erreur est survenu</Typography>;
    }
  };

  return (
    <>
      <StyledRadioGroup
        aria-label="gender"
        name="controlled-radio-buttons-group"
        defaultValue={questionTypes[0].value}
        value={typeOfQuestion}
        onChange={onChange}
      >
        {questionTypes.map((questionType, index) => (
          <StyledControlFormLabel
            key={questionType.key}
            value={questionType.value}
            control={<Radio />}
            label={questionType.key}
          />
        ))}
      </StyledRadioGroup>

      <ComputedAnswerComponent />
    </>
  );
};

export default RadioTypeOfQuestionNew;
