import { useState } from "react";
import CreateQuizQuestionForm from "./CreateQuizQuestionForm";
import CreateQuizTitleForm from "./CreateQuizTitleForm";

interface CreateQuizStepperProps {}

export interface CreatedQuizState {
  title: string;
  password: string;
  questions: {
    text: string;
    type: number;
    answers: {
      text: string;
      isCorrect: boolean;
    }[];
  }[];
}

const CreateQuizStepper: React.FC<CreateQuizStepperProps> = ({}) => {
  const [currentStep, setCurrentStep] = useState(1);

  const [createdQuiz, setCreatedQuiz] = useState<CreatedQuizState>({
    title: "",
    password: "",
    questions: Array(5).fill({
      text: "",
      type: 0,
      answers: Array(1).fill({
        text: "",
        isCorrect: false,
      }),
    }),
  });

  console.log(
    "🚀 ~ file: CreateQuizStepper.tsx ~ line 36 ~ createdQuiz",
    createdQuiz
  );
  // deep clone array fonction
  const cloneArray = (array: any[]) => {
    return JSON.parse(JSON.stringify(array));
  };

  const addQuestion = (
    question: CreatedQuizState["questions"][0],
    index: number
  ) => {
    // deep copy answers into newAnswers
    const newQuestions = cloneArray(createdQuiz.questions);

    newQuestions[index].text = question.text;
    newQuestions[index].type = question.type;
    newQuestions[index].answers = question.answers;

    return newQuestions;
  };

  const onSubmit = (values: any) => {
    switch (true) {
      case currentStep === 0:
        setCreatedQuiz((prevState) => {
          return {
            ...prevState,
            title: values.title,
            password: values.password,
          };
        });
        setCurrentStep(currentStep + 1);
        break;
      case currentStep < 5:
        setCreatedQuiz((prevState) => {
          return {
            ...prevState,
            questions: addQuestion(values, currentStep - 1),
          };
        });
        setCurrentStep(currentStep + 1);
        break;
      case currentStep === 5:
        setCreatedQuiz((prevState) => {
          return {
            ...prevState,
            questions: addQuestion(values, currentStep - 1),
          };
        });
        setCurrentStep(currentStep + 1);

        break;

      default:
        return <p>Erreur</p>;
    }
  };

  const ComputedStepComponent = (): any => {
    switch (true) {
      case currentStep === 0:
        return <CreateQuizTitleForm onSubmit={onSubmit} />;
      case currentStep < 5:
        return <CreateQuizQuestionForm onSubmit={onSubmit} />;
      case currentStep === 5:
        return <CreateQuizQuestionForm onSubmit={onSubmit} />;

      default:
        return <p>Erreur</p>;
    }
  };

  return <ComputedStepComponent />;
};

export default CreateQuizStepper;
