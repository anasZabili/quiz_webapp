import { useState } from "react";
import CenterBox from "../../atoms/CenterBox";
import { CreatedQuizState } from "./CreateQuizStepper";
import TextInput from "../../atoms/TextInput";
import { UpdateQuizState } from "../UpdateQuiz";
import Button from "../../atoms/Button";

interface TextChoiceProps {
  questionType: number;
  handleChange: (question: CreatedQuizState["questions"][0]) => void;
  defaultValues?: UpdateQuizState["questions"][0];
}

const TextChoice: React.FC<TextChoiceProps> = ({
  questionType,
  handleChange,
  defaultValues,
}) => {
  const [answer, setAnswer] = useState<{ text: string; isCorrect: boolean }>({
    text: defaultValues?.answers[0].text || "",
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

  const hasQuestionAndAnswer = () => {
    return questionText.length > 0 && answer.text.length > 0;
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
        disabled={!hasQuestionAndAnswer()}
        onClick={() =>
          handleChange({
            text: questionText,
            type: questionType,
            answers: [answer],
          })
        }
      >
        Suivant
      </Button>
    </CenterBox>
    // </StyledBox>
  );
};

export default TextChoice;
