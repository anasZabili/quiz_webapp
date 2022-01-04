import CenterForm from "../../atoms/CenterForm";
import InputAndLabel from "../../molecules/InputAndLabel";
import RadioTypeOfQuiz from "./RadioTypeOfQestion";
import H2Bold from "../../atoms/H2Bold";
import useFetchData from "../../../hooks/useFetchData";
import { useState } from "react";
import { Box } from "@mui/material";

interface CreateQuizFormProps {
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}

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

const CreateQuizForm: React.FC<CreateQuizFormProps> = () => {
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
    "🚀 ~ file: CreateQuizForm.tsx ~ line 27 ~ createdQuiz",
    createdQuiz
  );

  const [quizTitle, setQuizTitle] = useState("");
  const handleQuestionChange = (
    questionNumber: number,
    questionType: number,
    answers: CreatedQuizState["questions"][0]["answers"]
  ) => {
    setCreatedQuiz((prevState) => {
      return {
        ...prevState,
        questions: prevState.questions.map((question, index) => {
          if (index === questionNumber) {
            return {
              ...question,
              type: questionType,
              text: quizTitle,
              answers: answers,
            };
          }
          return question;
        }),
      };
    });
  };

  // console.log(event.target.value);

  const url = process.env.REACT_APP_API_BASE + "questions/types";
  const { error, isLoading, data } = useFetchData(url);
  console.log("🚀 ~ file: CreateQuizForm.tsx ~ line 9 ~ axiosGet", data);

  return (
    <CenterForm>
      <InputAndLabel
        inputType="text"
        placeholder="Titre"
        label="Titre du Quiz"
        onChange={(e) =>
          setCreatedQuiz({ ...createdQuiz, title: e.target.value })
        }
      />
      <InputAndLabel
        inputType="password"
        placeholder="Mot de passe"
        label="Mot de passe du Quiz"
        onChange={(e) =>
          setCreatedQuiz({ ...createdQuiz, password: e.target.value })
        }
      />

      {Array(5)
        .fill(0)
        .map((_, index) => (
          <Box key={"CreateQuizForm" + index}>
            <H2Bold>Question {index + 1}</H2Bold>
            {!isLoading && (
              <RadioTypeOfQuiz
                handleChange={handleQuestionChange}
                questionTypes={data}
                setCreatedQuiz={setCreatedQuiz}
                questionNumber={index}
              />
            )}
          </Box>
        ))}
    </CenterForm>
  );
};

export default CreateQuizForm;
