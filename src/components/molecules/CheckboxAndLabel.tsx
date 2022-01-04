import { Checkbox, FormControlLabel } from "@mui/material";
import { useState } from "react";

interface CheckBoxAndLabelProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
}

const CheckBoxAndLabel: React.FC<CheckBoxAndLabelProps> = ({
  label,
  onChange,
}) => {
  const [state, setstate] = useState(false);
  return (
    <FormControlLabel
      control={<Checkbox color="primary" onChange={onChange} />}
      // color="primary"
      sx={{
        color: "#eef3f8",
        // boxShadow: "0px 0px 0px 1px #eef3f8",

        "&.Mui-checked": {
          color: "#eef3f8",
          border: "2px solid #bcbcbc",
        },
        ".MuiCheckbox-root": {
          color: "#eef3f8b0",
          // border: "2px solid #bcbcbc",
        },
      }}
      label={label}
    />
  );
};

export default CheckBoxAndLabel;
