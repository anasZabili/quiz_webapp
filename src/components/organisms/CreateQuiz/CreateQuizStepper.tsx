import { CircularProgress, Box, Typography, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import useFetchData from "../../../hooks/useFetchData";
import { UpdateQuizState } from "../UpdateQuiz";
import CreateQuizQuestionForm from "./CreateQuizQuestionForm";
import CreateQuizTitleForm from "./CreateQuizTitleForm";
import { customErrorToast } from "../../../utils/customToast";

interface CreateQuizStepperProps {
  handleCreate: (values: any) => void;
  defaultValues?: UpdateQuizState;
  isUpdate?: boolean;
}

export interface CreatedQuizState {
  name: string;
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

const CreateQuizStepper: React.FC<CreateQuizStepperProps> = ({
  handleCreate,
  defaultValues,
  isUpdate = false,
}) => {
  const quizzesUrl = process.env.REACT_APP_API_BASE + "quizzes";
  const {
    error: quizzesError,
    isLoading: quizzesIsLoading,
    data: quizzesData,
  } = useFetchData(quizzesUrl);

  useEffect(() => {
    if (quizzesError) {
      customErrorToast("Erreur", "Une erreur est survenue");
    }
  }, [quizzesError]);

  const [currentStep, setCurrentStep] = useState(0);

  const [createdQuiz, setCreatedQuiz] = useState<CreatedQuizState>({
    name: "",
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

  // deep clone array fonction
  const cloneArray = (array: any[]) => {
    return JSON.parse(JSON.stringify(array));
  };

  const addQuestion = (
    question: CreatedQuizState["questions"][0],
    index: number
  ) => {
    const newQuestions = cloneArray(createdQuiz.questions);

    newQuestions[index].text = question.text;
    newQuestions[index].type = question.type;
    newQuestions[index].answers = question.answers;

    return newQuestions;
  };

  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (isFinished) {
      handleCreate(createdQuiz);
    }
    //cleanup
    return () => {
      setCurrentStep(8);
    };
  }, [isFinished]);

  const onSubmit = (values: any) => {
    switch (true) {
      case currentStep === 0:
        if (!isUpdate) {
          if (
            quizzesData.filter(
              (value: { id: string; name: string }) =>
                value.name === values.name
            ).length > 0
          ) {
            customErrorToast(
              "Erreur",
              "Un quiz portant le m??me nom existe d??j??"
            );
            break;
          }
        }

        setCreatedQuiz((prevState) => {
          return {
            ...prevState,
            name: values.name,
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
        setIsFinished(true);

        // setCurrentStep(currentStep + 1);

        break;

      default:
        return <Typography color="primary">Erreur</Typography>;
    }
  };

  const ComputedStepComponent = (): any => {
    switch (true) {
      case currentStep === 0:
        return (
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={3}
          >
            <Grid item xs={12}>
              <Typography variant="h5" color="primary">
                Informations du Quiz
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <CreateQuizTitleForm
                onSubmit={onSubmit}
                defaultValues={defaultValues}
              />
            </Grid>
          </Grid>
        );
      case currentStep < 6:
        return (
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={3}
          >
            <Grid item xs={12}>
              <Typography variant="h5" color="primary">
                {"Question " + currentStep + " / 5"}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              {currentStep === 5 ? (
                <CreateQuizQuestionForm
                  defaultValues={defaultValues?.questions[currentStep - 1]}
                  onSubmit={onSubmit}
                />
              ) : (
                <CreateQuizQuestionForm
                  defaultValues={defaultValues?.questions[currentStep - 1]}
                  onSubmit={onSubmit}
                />
              )}
            </Grid>
          </Grid>
        );

      default:
        return <Typography color="primary">Erreur</Typography>;
    }
  };

  return (
    <>
      {quizzesIsLoading ? (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      ) : (
        <ComputedStepComponent />
      )}
    </>
  );
};

export default CreateQuizStepper;
