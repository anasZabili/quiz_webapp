import { Button } from "@mui/material";
import { useState } from "react";
import CenterForm from "../../atoms/CenterForm";
import InputAndLabel from "../../molecules/InputAndLabel";

interface CreateQuizTitleFormProps {
  onSubmit: (values: any) => void;
  defaultValues?: {
    name: string;
    password: string;
  };
}

const CreateQuizTitleForm: React.FC<CreateQuizTitleFormProps> = ({
  onSubmit,
  defaultValues,
}) => {
  const [title, setTitle] = useState(defaultValues?.name || "");
  const [password, setPassword] = useState(defaultValues?.password || "");

  return (
    <CenterForm>
      <InputAndLabel
        inputType="text"
        placeholder="Titre"
        label="Titre du Quiz"
        onChange={(e) => setTitle(e.target.value)}
      />
      <InputAndLabel
        inputType="password"
        placeholder="Mot de passe"
        label="Mot de passe du Quiz"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        onClick={() => {
          const formatedValues = {
            name: title,
            password: password,
          };
          onSubmit(formatedValues);
        }}
      >
        Suivant
      </Button>
    </CenterForm>
  );
};

export default CreateQuizTitleForm;
