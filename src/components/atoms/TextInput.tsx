import { InputBase } from "@mui/material";
import { styled } from "@mui/system";

const Input = styled(InputBase)({
  "label + &": {},
  "& .MuiInputBase-input": {
    color: "white",
    borderRadius: 4,
    position: "relative",
    backgroundColor: "#2b2b2b",
    border: "1px solid #eef3f8",
    fontSize: 16,
    width: "auto",
    padding: "10px 12px",
    // Use the system font instead of the default Roboto font.
    "&:focus": {
      borderColor: "white",
    },
  },
});
const TextInput = ({ ...props }) => {
  return <Input {...props} />;
};

export default TextInput;
