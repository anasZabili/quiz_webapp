import { Box, FormControl } from "@mui/material";
import { styled } from "@mui/system";
import TextInput from "../atoms/TextInput";
import InputLabel from "../atoms/InputLabel";

interface InputAndLabelProps {
  inputType: string;
  placeholder: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  [x: string]: any;
}

const InputAndLabel: React.FC<InputAndLabelProps> = ({
  inputType,
  placeholder,
  onChange,
  ...props
}) => {
  return (
    <>
      <TextInput
        type={inputType}
        placeholder={placeholder}
        onChange={onChange}
        {...props}
      />
    </>
  );
};

export default InputAndLabel;
