import { RadioGroup, FormControlLabel, Typography } from "@mui/material";
import { useState } from "react";
import { styled } from "@mui/system";
import Radio from "../../atoms/Radio";
import MultipleChoiceInput from "./MutipleChoiceInput";
import { CreatedQuizState } from "./CreateQuizForm";
import TextInput from "../../atoms/TextInput";

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

type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

interface RadioTypeOfQuestionNewProps {
  handleChange: (
    questionType: number,
    answers: CreatedQuizState["questions"][0]["answers"],
    questionText: string
  ) => void;
  questionTypes: { key: string; value: number }[];
  defaultValues?: DeepPartial<CreatedQuizState["questions"][0]>;
}

const RadioTypeOfQuestionNew: React.FC<RadioTypeOfQuestionNewProps> = ({
  handleChange,
  questionTypes,
  defaultValues,
}) => {
  // const [selectedAnswer, setSelectedAnswer] = useState(questionTypes[0].value);
  const [typeOfQuestion, setTypeOfQuestion] = useState<number>(
    questionTypes[0].value
  );

  const [questionText, setQuestionText] = useState(defaultValues?.text || "");

  console.log(
    "🚀 ~ file: RadioTypeOfQuestionNew.tsx ~ line 48 ~ questionText",
    questionText
  );

  const handleInputAnswerChange = (
    answers: CreatedQuizState["questions"][0]["answers"]
  ) => {
    handleChange(typeOfQuestion, answers, questionText);
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
      <TextInput
        inputType="text"
        placeholder={`Question`}
        value={questionText}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setQuestionText(event.target.value)
        }
        // label="Mot de passe du Quiz"
      />
      <ComputedAnswerComponent />
    </>
  );
};

export default RadioTypeOfQuestionNew;
