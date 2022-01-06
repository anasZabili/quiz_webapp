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
  console.log(
    "🚀 ~ file: TextChoice.tsx ~ line 19 ~ defaultValues",
    defaultValues
  );
  const [answer, setAnswer] = useState<{ text: string; isCorrect: boolean }>({
    text: defaultValues?.answers[0].text || "",
    isCorrect: true,
  });
  const [questionText, setQuestionText] = useState(defaultValues?.text || "");
  console.log(
    "🚀 ~ file: TextChoice.tsx ~ line 28 ~ questionText",
    questionText
  );

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
        disabled={!answer}
      >
        Suivant
      </Button>
    </CenterBox>
    // </StyledBox>
  );
};

export default TextChoice;
