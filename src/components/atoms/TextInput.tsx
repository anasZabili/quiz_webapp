import { InputBase, TextField } from "@mui/material";
import { styled } from "@mui/system";

const Input = styled(InputBase)({
  "label + &": {},
  "& .MuiInputBase-input": {
    color: "#eef3f8",
    borderRadius: 4,
    position: "relative",
    backgroundColor: "#2b2b2b",
    border: "1px solid #eef3f8",
    fontSize: 16,
    width: "auto",
    padding: "10px 17px",
    // Use the system font instead of the default Roboto font.
    "&:focus": {
      borderColor: "#eef3f8",
    },
    minWidth: "13em",
  },
});

// create #eef3f8 custom TextField with styled
// const StyledTextField = styled(TextField)({
//   "& .MuiInputBase-input": {
//     color: "#eef3f8",
//     backgroundColor: "#2b2b2b",
//     // set border color to #eef3f8
//     // border: "1px solid #eef3f8",
//     // border: "3px solid #eef3f8",
//     // Use the system font instead of the default Roboto font.
//     // "&:focus": {
//     //   borderColor: "#eef3f8",
//     // },
//     // minWidth: "13em",
//   },
// });

const CssTextField = styled(TextField)({
  // '& label.Mui-focused': {
  //   color: 'green',
  // },
  // '& .MuiInput-underline:after': {
  //   borderBottomColor: 'green',
  // },
  "& .MuiInputLabel-animated": {
    color: "#eef3f8",
  },
  "& .MuiInputBase-input": {
    color: "#eef3f8",
  },
  "input::placeholder": {
    color: "#eef3f8",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#eef3f8",
    },
    "&:hover fieldset": {
      borderColor: "#eef3f8",
    },
    // '&.Mui-focused fieldset': {
    //   borderColor: 'green',
    // },
  },
});

const TextInput = ({ ...props }) => {
  return <CssTextField color="primary" variant="outlined" {...props} />;
};

export default TextInput;
