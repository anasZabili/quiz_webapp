import { useState } from "react";
import CenterBox from "../../atoms/CenterBox";
import { CreatedQuizState } from "./CreateQuizStepper";
import { styled } from "@mui/system";
import { Box, Button, Grid } from "@mui/material";
import TextInput from "../../atoms/TextInput";

interface TextChoiceProps {
  questionType: number;
  handleChange: (question: CreatedQuizState["questions"][0]) => void;
  defaultValues?: CreatedQuizState["questions"][0];
}

const StyledBox = styled(Box)({
  display: "grid",
  gridTemplateColumns: "auto auto",
  gridGap: "1rem",
  alignItems: "center",
  justifyItems: "center",
});

const TextChoice: React.FC<TextChoiceProps> = ({
  questionType,
  handleChange,
  defaultValues,
}) => {
  const [answer, setAnswer] = useState<{ text: string; isCorrect: boolean }>({
    text: "",
    isCorrect: true,
  });
  const [questionText, setQuestionText] = useState(defaultValues?.text || "");

  // deep clone array fonction

  const handleInputChange = (
    inputEvent: React.ChangeEvent<HTMLInputElement>
  ) => {
    // deep copy answers into newAnswer
    const newAnswer = { ...answer };

    newAnswer.text = inputEvent.target.value;
    setAnswer(newAnswer);
  };
  return (
    // <StyledBox>
    <CenterBox>
      <TextInput
        inputType="text"
        placeholder={`Question`}
        label="Question"
        value={questionText}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setQuestionText(event.target.value)
        }
        // label="Mot de passe du Quiz"
      />
      <TextInput
        inputType="text"
        placeholder={`Réponse`}
        label="Réponse"
        value={answer.text}
        onChange={handleInputChange}
      />
      <Button
        onClick={() =>
          handleChange({
            text: questionText,
            type: questionType,
            answers: [answer],
          })
        }
      >
        Click pr submit le change
      </Button>
    </CenterBox>
    // </StyledBox>
  );
};

export default TextChoice;
