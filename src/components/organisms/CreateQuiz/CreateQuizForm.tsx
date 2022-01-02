import { Box, FormControl, Typography } from "@mui/material";
import { styled } from "@mui/system";
import TextInput from "../../atoms/TextInput";
import CenterForm from "../../atoms/CenterForm";
import InputLabel from "../../atoms/InputLabel";
import InputAndLabel from "../../molecules/InputAndLabel";

interface CreateQuizFormProps {
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}

const CreateQuizForm: React.FC<CreateQuizFormProps> = () => {
  return (
    <CenterForm>
      <InputAndLabel
        inputType="text"
        placeholder="Titre"
        label="Titre du Quiz"
      />
      <InputAndLabel
        inputType="password"
        placeholder="Mot de passe"
        label="Mot de passe du Quiz"
      />

      {Array(10)
        .fill(0)
        .map((_, index) => (
          <Typography key={index} variant="h6" color="primary">
            Question {index + 1}
          </Typography>
        ))}
    </CenterForm>
  );
};

export default CreateQuizForm;
