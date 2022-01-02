import { Box, FormControl } from "@mui/material";
import { styled } from "@mui/system";
import TextInput from "../atoms/TextInput";
import InputLabel from "../atoms/InputLabel";

interface InputAndLabelProps {
  label: string;
  inputType: string;
  placeholder: string;
}

const InputAndLabel: React.FC<InputAndLabelProps> = ({
  label,
  inputType,
  placeholder,
}) => {
  return (
    <>
      <InputLabel htmlFor="my-input">{label}</InputLabel>
      <TextInput type={inputType} placeholder={placeholder} />
    </>
  );
};

export default InputAndLabel;
