import { Box, FormControl } from "@mui/material";
import { styled } from "@mui/system";
import TextInput from "../atoms/TextInput";
import InputLabel from "../atoms/InputLabel";

interface InputAndLabelProps {
  label?: string;
  inputType: string;
  placeholder: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputAndLabel: React.FC<InputAndLabelProps> = ({
  label,
  inputType,
  placeholder,
  onChange,
}) => {
  return (
    <>
      {label && <InputLabel htmlFor="my-input">{label}</InputLabel>}
      <TextInput
        type={inputType}
        placeholder={placeholder}
        onChange={onChange}
      />
    </>
  );
};

export default InputAndLabel;
