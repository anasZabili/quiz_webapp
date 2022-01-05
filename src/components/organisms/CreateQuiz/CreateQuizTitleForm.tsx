import { Button, Grid } from "@mui/material";
import { useState } from "react";
import CenterForm from "../../atoms/CenterForm";
import TextInput from "../../atoms/TextInput";
import { UpdateQuizState } from "../UpdateQuiz";

interface CreateQuizTitleFormProps {
  onSubmit: (values: any) => void;
  defaultValues?: UpdateQuizState;
}

const CreateQuizTitleForm: React.FC<CreateQuizTitleFormProps> = ({
  onSubmit,
  defaultValues,
}) => {
  const [title, setTitle] = useState(defaultValues?.name || "");
  const [password, setPassword] = useState("");

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      rowGap={3}
    >
      <Grid item xs={12}>
        <TextInput
          inputType="text"
          placeholder="Titre"
          label="Titre du Quiz"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
        />
      </Grid>
      {!defaultValues && (
        <Grid item xs={12}>
          <TextInput
            inputType="password"
            placeholder="Mot de passe"
            label="Mot de passe du Quiz"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
          />
        </Grid>
      )}
      <Grid item xs={12}>
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
      </Grid>
    </Grid>
  );
};

export default CreateQuizTitleForm;
