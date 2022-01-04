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
    "🚀 ~ file: CreateQuizStepper.tsx ~ line 23 ~ createdQuiz",
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

    console.log(
      "🚀 ~ file: MutipleChoiceInput.tsx ~ line 92 ~ newAnswers",
      newQuestions
    );
    return newQuestions;
  };

  const onSubmit = (values: any) => {
    switch (currentStep) {
      case 0:
        setCreatedQuiz((prevState) => {
          return {
            ...prevState,
            title: values.title,
            password: values.password,
          };
        });
        setCurrentStep(currentStep + 1);
        break;
      case 1:
        setCreatedQuiz((prevState) => {
          return {
            ...prevState,
            questions: addQuestion(values, currentStep),
          };
        });
        break;

      default:
        return;
    }
  };

  // const nextQuestion = (isCorrect: boolean) => {
  //   if (isCorrect) {
  //     setCurrentScore((prevScore) => prevScore + 1);
  //   }
  //   setCurrentQuestionNumber(currentQuestionNumber + 1);
  // };
  const ComputedStepComponent = (): any => {
    switch (currentStep) {
      case 0:
        return <CreateQuizTitleForm onSubmit={onSubmit} />;
      // return <h1>CreateQuizTitleForm</h1>;
      case 1:
        return <CreateQuizQuestionForm onSubmit={onSubmit} />;
      //return <h1>CreateQuizQuestionForm</h1>;
    }
  };

  return <ComputedStepComponent />;
};

export default CreateQuizStepper;
