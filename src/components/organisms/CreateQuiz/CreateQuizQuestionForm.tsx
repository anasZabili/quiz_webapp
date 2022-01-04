import { useState } from "react";
import useFetchData from "../../../hooks/useFetchData";
import { CreatedQuizState } from "./CreateQuizStepper";
import RadioTypeOfQuestionNew from "./RadioTypeOfQuestionNew";

type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

interface CreateQuizQuestionForm {
  onSubmit: (values: any) => void;
  defaultValues?: DeepPartial<CreatedQuizState["questions"][0]>;
}

const CreateQuizQuestionForm: React.FC<CreateQuizQuestionForm> = ({
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
        ? defaultValues.answers.map((value) => {
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
  console.log(
    "🚀 ~ file: CreateQuizQuestionForm.tsx ~ line 23 ~ question",
    question
  );

  const handleQuestionChange = (
    questionType: number,
    answers: CreatedQuizState["questions"][0]["answers"],
    questionText: string
  ) => {
    setQuestion((prevState) => {
      return {
        ...prevState,
        text: questionText,
        type: questionType,
        answers: answers,
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
