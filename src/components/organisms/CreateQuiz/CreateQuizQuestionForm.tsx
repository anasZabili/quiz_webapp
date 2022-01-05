import { useState } from "react";
import useFetchData from "../../../hooks/useFetchData";
import { UpdateQuizState } from "../UpdateQuiz";
import { CreatedQuizState } from "./CreateQuizStepper";
import RadioTypeOfQuestionNew from "./RadioTypeOfQuestionNew";

type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

interface CreateQuizQuestionFormProps {
  onSubmit: (values: any) => void;
  //defaultValues?: DeepPartial<CreatedQuizState["questions"][0]>;
  defaultValues?: UpdateQuizState["questions"][0];
}

const CreateQuizQuestionForm: React.FC<CreateQuizQuestionFormProps> = ({
  onSubmit,
  defaultValues,
}) => {
  const url = process.env.REACT_APP_API_BASE + "questions/types";
  const { error, isLoading, data } = useFetchData(url);

  const [question, setQuestion] = useState<CreatedQuizState["questions"][0]>({
    text: defaultValues?.text || "",
    type: defaultValues?.type || 0,
    answers:
      defaultValues &&
      defaultValues.answers &&
      defaultValues.answers?.length > 0
        ? defaultValues.answers.map((value: { text: any; isCorrect: any }) => {
            return {
              text: value?.text || "",
              isCorrect: value?.isCorrect || false,
            };
          })
        : Array(1).fill({
            text: "",
            isCorrect: false,
          }),
  });

  const handleQuestionChange = (question: CreatedQuizState["questions"][0]) => {
    setQuestion((prevState) => {
      return {
        ...prevState,
        text: question.text,
        type: question.type,
        answers: question.answers,
      };
    });
    onSubmit(question);
  };

  return (
    <>
      {!isLoading && (
        <RadioTypeOfQuestionNew
          handleChange={handleQuestionChange}
          questionTypes={data}
          defaultValues={defaultValues}
        />
      )}
    </>
  );
};

export default CreateQuizQuestionForm;
