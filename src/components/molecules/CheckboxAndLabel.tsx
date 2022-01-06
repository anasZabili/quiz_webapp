import { Checkbox, FormControlLabel } from "@mui/material";

interface CheckBoxAndLabelProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  [x: string]: any;
}

const CheckBoxAndLabel: React.FC<CheckBoxAndLabelProps> = ({
  label,
  onChange,
  ...props
}) => {
  return (
    <FormControlLabel
      control={<Checkbox color="primary" onChange={onChange} {...props} />}
      sx={{
        color: "#eef3f8",

        "&.Mui-checked": {
          color: "#eef3f8",
          border: "2px solid #bcbcbc",
        },
        "&.MuiFormControlLabel-root": {
          margin: "0 auto",
          color: "#eef3f8b0",
          width: "100%",
        },
        svg: {
          color: "#eef3f8",
        },
      }}
      label={label}
    />
  );
};

export default CheckBoxAndLabel;
