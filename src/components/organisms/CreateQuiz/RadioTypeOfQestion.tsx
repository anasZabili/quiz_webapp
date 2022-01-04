import { RadioGroup, FormControlLabel, Typography } from "@mui/material";
import { useState } from "react";
import { styled } from "@mui/system";
import Radio from "../../atoms/Radio";
import MultipleChoiceInput from "./MutipleChoiceInput";
import { CreatedQuizState } from "./CreateQuizForm";

const StyledControlFormLabel = styled(FormControlLabel)({
  color: "white",
});

const StyledRadioGroup = styled(RadioGroup)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  margin: "0",
  // alignItems: "center",
  // "& > *": {
  //   marginBottom: "1em",
  // },
});

interface RadioTypeOfQuestionProps {
  handleChange: (
    questionNumber: number,
    questionType: number,
    answers: CreatedQuizState["questions"][0]["answers"]
  ) => void;
  questionTypes: { key: string; value: number }[];
  setCreatedQuiz: React.Dispatch<React.SetStateAction<CreatedQuizState>>;
  questionNumber: number;
}

const RadioTypeOfQuestion: React.FC<RadioTypeOfQuestionProps> = ({
  handleChange,
  questionTypes,
  questionNumber,
}) => {
  // const [selectedAnswer, setSelectedAnswer] = useState(questionTypes[0].value);
  const [typeOfQuestion, setTypeOfQuestion] = useState<number>(
    questionTypes[0].value
  );

  const handleInputAnswerChange = (
    answers: CreatedQuizState["questions"][0]["answers"]
  ) => {
    handleChange(questionNumber, typeOfQuestion, answers);
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
        return <MultipleChoiceInput handleChange={handleInputAnswerChange} />;
      // choix unique
      case 1:
        return <Typography color="primary">Choix unique</Typography>;

      // réponse libre
      case 2:
        return <Typography color="primary">Réponse libre</Typography>;
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
            key={questionType.value}
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

export default RadioTypeOfQuestion;
